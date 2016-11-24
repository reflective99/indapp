package com.asim.indapp.utils;


/**
 *
 * @author Asim Hasan
 *  This class contains static strings
 *  as paths. This is where we will
 *  start defining what endpoints
 *  the frontend is going to hit
 */
public class Paths {

    public Paths() {

    }

    // Class that contains endpoints for
    // The API
    public static class API {

        public static String GET_BLOGS = "api/blogs";

        public static String CHECK_PATTERN = "[^a-zA-Z0-9:\",{}@_.\\- ]";
        public static String JSON_TYPE = "application/json";
    }

    // Class that contains the Database Info
    public static class Database {

        public static String LOCAL_DB_NAME = "db_main";
        public static String HEROKU_DB_NAME = "db_main";
        public static String HOST = "127.0.0.1";
        public static int PORT = 27017;


    }

    // Class that will handle the Replies
    public static class Reply {

        public static int OK = 200;
        public static String OK_MESSAGE = "Well Done! You've done something right";

        public static int BLOG_NOT_FOUND = 601;
        public static String BLOG_NOT_FOUND_MSG = "The blog address you entered hasn't been processed yet";

    }

}
