



mode = "local";
// mode = "staging";
// mode = "prePod";
// mode = "prod";
config = {};

if (mode === "staging") {

} else if (mode === "prod") {

} else if (mode === "preProd") {

}
else if (mode === "local") {
        config.mongoURILocal = "mongodb://localhost:27017/sampletest",
                config.port = 8000
}


