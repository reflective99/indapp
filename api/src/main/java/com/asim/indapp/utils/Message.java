package com.asim.indapp.utils;

public class Message {

    private String status;
    private int code;

    public Message() {

    }

    public Message(int code, String status) {
        this.code = code;
        this.status = status;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getCode() {
        return this.code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "code: " + getCode() + " status: " + getStatus();
    }
}
