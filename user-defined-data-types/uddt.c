#include "stdlib.h"
#include "stdio.h"
#include "string.h"

struct client {
    char Name[50];
    char Id[10];
    float Credit;
    char Address[100];
};

int main(int argc, char const *argv[]) {
    struct client client_1 = {0};

    strcpy(client_1.Name, "Felipe Rivera");
    strcpy(client_1.Id, "000000001");
    client_1.Credit = 5000;
    strcpy(client_1.Address, "Av. La Goajira, Urb. Monte Claro, Edif. 5 Apt. 5-B");

    printf("The client name is: %s \n", client_1.Name);
    printf("The client id is: %s \n", client_1.Id);
    printf("The client credit is: %f \n", client_1.Credit);
    printf("The client address is: %s \n", client_1.Address);

    return 0;
};