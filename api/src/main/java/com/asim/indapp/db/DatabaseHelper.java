package com.asim.indapp.db;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.asim.indapp.blog.Blog;
import com.asim.indapp.utils.Paths;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

public class DatabaseHelper {


    private static Morphia morphia = new Morphia();
    private static Datastore datastore = null;

    private static Logger logger = LoggerFactory.getLogger(DatabaseHelper.class);

    public DatabaseHelper() {
        if(!morphia.isMapped(Blog.class)) {
            morphia.map(Blog.class);
            initDatastore();
        } else {
            logger.info("Database Class Mapped Already!");
        }
    }

    void initDatastore() {

        ProcessBuilder pb = new ProcessBuilder();
        MongoClient mongoClient;

        String HEROKU_MLAB_URI = pb.environment().get("MONGODB_URI");

        if(HEROKU_MLAB_URI != null && !HEROKU_MLAB_URI.isEmpty()) {
            //heroku environ
            logger.error("Remote MLAB Database Detected");
            mongoClient = new MongoClient(new MongoClientURI(HEROKU_MLAB_URI));
            datastore = morphia.createDatastore(mongoClient, Paths.Database.HEROKU_DB_NAME);
        } else {
            logger.info("Local Database detected");
            mongoClient = new MongoClient(Paths.Database.HOST, Paths.Database.PORT);
            datastore = morphia.createDatastore(mongoClient, Paths.Database.LOCAL_DB_NAME);

        }

        datastore.ensureIndexes();
        logger.info("Database connection successful and datastore initalized!");
    }

    public Datastore getDatastore() {
        if(datastore == null) {
            initDatastore();
        }
        return datastore;
    }

}
