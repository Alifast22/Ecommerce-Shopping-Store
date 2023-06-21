#USING UDP:

#server

import socket

def server():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    host = 'localhost'
    port = 9999
   
    s.bind((host, port))
   
    print(f'Server is starting at {host}:{port}')
   
    while True:
        message, address = s.recvfrom(1024)
        message = message.decode()
        if message.lower()=='end':
            break
        print(f'Received from {address[0]}:{address[1]} - {message}')
        message = input('Server side message to send: ')
        s.sendto(message.encode(), address)
   
    s.close()

if __name__ == '__main__':
    server()
