import axios from "axios";


export default {
    // Gets all items
    getItems: function() {
        return axios.get("/api/charts");
    },
    // Gets the item with the given id
    getItem: function(id) {
        return axios.get("/api/charts/" + id);
    },
};