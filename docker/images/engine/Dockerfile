FROM debian:stable-slim
RUN apt update && apt upgrade -y
RUN apt install -y git make g++ libsfml-dev libboost-all-dev
RUN git clone https://github.com/OpenSourceCTF/engine.git /home/engine
WORKDIR /home/engine
RUN make
# CMD ["./tagos serve"]
