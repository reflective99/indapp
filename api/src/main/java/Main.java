import static spark.Spark.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.asim.indapp.blog.BlogController;
import com.asim.indapp.db.DatabaseHelper;
import com.asim.indapp.utils.JSONTransformer;

import spark.Session;

public class Main {

    static Logger logger = LoggerFactory.getLogger(Main.class);

    public Main() {

        // Set Port. Depending on whether running locally or in Production
        port(getPortAssignment());


        new DatabaseHelper();
        // Handle routes

        // HomePage

        get("/api/blogs", (req, res) -> {return BlogController.serveBlogs(req, res);});
        post("/api/blogs/new", "application/json", (req, res) -> { return BlogController.handleNewBlog(req, res); } );

    }

    private static int getPortAssignment() {

        // Get the port assigned in Production or return
        // 9000 for use in local dev
        ProcessBuilder processBuilder = new ProcessBuilder();
        if(processBuilder.environment().get("PORT") != null) {
            logger.debug("Assigning port in production");
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        logger.debug("Assigning port 9000 for local dev");
        return 9000;
    }

    public static void main(String[] args) {
        new Main();
    }

}
