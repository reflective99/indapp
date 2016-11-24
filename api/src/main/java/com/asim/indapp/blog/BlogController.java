package com.asim.indapp.blog;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.mongodb.morphia.Datastore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.asim.indapp.db.DatabaseHelper;
import com.asim.indapp.utils.Paths;
import com.fasterxml.jackson.databind.ObjectMapper;

import spark.Request;
import spark.ModelAndView;
import spark.Response;
import spark.Session;

public class BlogController {

    static DatabaseHelper dbHelper = new DatabaseHelper();
    static Datastore ds;
    static Logger logger = LoggerFactory.getLogger(BlogController.class);

    public BlogController() {}

    public static Object serveBlogs(Request req, Response res) {

        ds = dbHelper.getDatastore();
        List<Blog> blogs = ds.createQuery(Blog.class).asList();

        StringBuilder jsonData = new StringBuilder();

        if(blogs != null && blogs.size() > 0) {
            logger.info("found " + blogs.size() + " blogs in DB");

            for(int i = 0; i < blogs.size(); i++) {
                Blog b = blogs.get(i);
                String bJson = b.toJson();
                bJson = "{"+"\"id\""+":\""+i+"\","+bJson.substring(1);
                jsonData.append(bJson).append(",");
                logger.info("jsonData " + i + " = " + b.toJson());
            }

            jsonData.deleteCharAt(jsonData.lastIndexOf(","));
            jsonData.insert(0, "[").append("]");
            logger.info("jsonData prepared for shipment! \n " + jsonData);
        } else {
            logger.warn("No blogs found in the database!");
            jsonData.append("{}");
        }

        return (Object) jsonData.toString();
    }

    public static int handleNewBlog(Request req, Response res) {
        String data = Jsoup.parse(req.body()).text().replaceAll(Paths.API.CHECK_PATTERN, "");

        try {
            logger.info("Parsed and escaped data passed to new contact = \n" + req.body());

            ObjectMapper omapper = new ObjectMapper();
            Blog newBlog = omapper.readValue(data, Blog.class);
            logger.info("Blog after conversion = \n" + newBlog.toString());

            ds = dbHelper.getDatastore();
            ds.save(newBlog);
            res.status(200);
        } catch (Exception e) {
            e.printStackTrace();
            res.status(500);
        }

        return res.status();
    }
}
