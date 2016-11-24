package com.asim.indapp.blog;

import java.util.Date;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;


@Entity("blogs")

public class Blog {

    @Id
    private ObjectId id;

    @Property("blog_name")
    private String blogName = "";

    @Property("blog_url")
    private String blogURL = "";

    @Property("blog_country")
    private String blogCountry = "";

    @Property("_created_at")
    private Date createdAt = new Date();

    @Property("_updated_at")
    private Date updatedAt = new Date();

    //@Property("blog_id")
    //private String blogId = "";


    public Blog() {

    }

    public Blog(String blogName, String blogURL, String blogCountry) {
        this.blogName = blogName;
        this.blogURL = blogURL;
        this.blogCountry = blogCountry;
    }

    public ObjectId getId() {
        return (id != null) ? id : null;
    }

    public void setId(String id) {
        if(id != null && !id.isEmpty()) {
            this.id = new ObjectId(id);
        }
    }

    public String getBlogName() {
        return blogName;
    }

    public void setBlogName(String blogName) {
        this.blogName = blogName;
    }

    public String getBlogURL() {
        return blogURL;
    }

    public void setBlogURL(String blogURL) {
        this.blogURL = blogURL;
    }

    public String getBlogCountry() {
        return blogCountry;
    }

    public void setBlogCountry(String blogCountry) {
        this.blogCountry = blogCountry;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    //public String getBlogId() {
    //  return blogId;
    //}

    //public void setBlogId(String blogId) {
    //  this.blogId = blogId;
    //}

    @Override
    public String toString() {
        return "id = " + id +
                "\nblog_name = " + getBlogName() +
                "\nblog_url = " + getBlogURL() +
                "\nblog_country = " + getBlogCountry() +
                "\n";
    }

    public String toJson() {
        return "{" +
                //"\"id\": " + "\"" + getId() + "\", " +
                "\"blogName\":" + "\"" + getBlogName() + "\", " +
                "\"blogURL\":" + "\"" + getBlogURL() + "\", " +
                "\"blogCountry\":" + "\"" + getBlogCountry() + "\"" +
                "}";


    }


}
