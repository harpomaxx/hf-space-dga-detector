FROM rstudio/plumber
MAINTAINER Carlos Catania (AKA Harpo) "harpomaxx@gmail.com"
RUN apt update -y; apt install -y python3-venv python3-dev python3-pip
RUN pip3 install huggingface_hub
RUN R -e "install.packages('reticulate');library('reticulate');reticulate::py_install('huggingface_hub')" 
RUN R -e "install.packages('tensorflow')"
RUN R -e "install.packages('keras')"
RUN R -e "install.packages('purrr')"
RUN R -e "install.packages('tokenizers')"
RUN R -e "install.packages('dplyr')"
RUN R -e "install.packages('stringr')"
RUN R -e "install.packages('doMC')"
RUN R -e "library(tensorflow);install_tensorflow(version='2.9')"
RUN R -e "library(keras);install_keras(version='2.9')"
COPY /app /app
WORKDIR /app
RUN mkdir -p /.cache
RUN chmod 777 /.cache
EXPOSE 7860
ENTRYPOINT ["Rscript","/app/launchservice.R"]

