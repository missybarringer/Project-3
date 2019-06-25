import axios from "axios";

export default {
    // Gets all Items
    getItems: function() {
        return axios.get("/api/Items");
    },
    // Gets the item with the given id
    getItem: function(id) {
        return axios.get("/api/Items/" + id);
    },
    // Deletes the item with the given id
    deleteItem: function(id) {
        return axios.delete("/api/Items/" + id);
    },
    // Saves a item to the database
    saveItem: function(itemData) {
        return axios.post("/api/Items", itemData);
    }
};