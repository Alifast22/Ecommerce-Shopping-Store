#client

import socket

def client():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    host = 'localhost'
    port = 9999
   
    print(f'Connected to {host}:{port}')
   
    while True:
        data = input('Cilent side message to send(Chat close on writing "end"): ')
        if  data.lower()=='end':
            print("Chat closing")
            s.sendto(data.encode(), (host, port))
            break
        s.sendto(data.encode(), (host, port))
        data, addr = s.recvfrom(1024)
        data = data.decode()
        print(f'Received from server - {data}')
   
    s.close()

if __name__ == '__main__':
    client()