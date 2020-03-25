package com.rolands.model;

public class Events {

    private int evId;
    private String evName;

    public int getEvId() {
        return evId;
    }
    public void setEvId(int evId) {
        this.evId = evId;
    }

    public String getEvName() {
        return evName;
    }
    public void setEvName(String evName) {
        this.evName = evName;
    }

    @Override
    public String toString() {
        return "EventID => " + evId + " EventName =>" + evName;
    }
}
