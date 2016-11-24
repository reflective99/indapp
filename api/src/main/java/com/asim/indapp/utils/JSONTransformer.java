package com.asim.indapp.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.Gson;

import spark.ResponseTransformer;

public class JSONTransformer implements ResponseTransformer{

    Gson gson = new Gson();
    Logger logger = LoggerFactory.getLogger(JSONTransformer.class);
    @Override
    public String render(Object model) throws Exception {

        String jsonOutput = gson.toJson(model);
        logger.info("JSON RESPONSE BEING SENT: " + jsonOutput);
        return jsonOutput;
    }

}
