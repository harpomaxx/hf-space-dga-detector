library(plumber)
r <- plumb("/app/dga-classifier-service.R") 
r$run(host = "0.0.0.0",port=7860)
