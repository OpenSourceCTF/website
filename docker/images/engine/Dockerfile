FROM debian:stable-slim
RUN apt-get update && apt-get install -y git make g++ libsfml-dev libboost-all-dev
RUN git clone https://github.com/OpenSourceCTF/engine.git /home/engine
WORKDIR /home/engine
RUN make
CMD ["/home/engine/tagos", "serve"]
