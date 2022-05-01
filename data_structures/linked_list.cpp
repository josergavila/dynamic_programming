#include <iostream>

struct Node
{
    int data;
    struct Node* next;
};
struct Node* head = NULL;

void insert(int new_data)
{
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = head;
    head = new_node;
}

void display()
{
    struct Node* ptr;
    ptr = head;
    while(ptr != NULL)
    {
        std::cout << ptr->data << " ";
        ptr = ptr->next;
    }
    std::cout << std::endl;
}

int main()
{
    insert(10);
    insert(5);
    insert(8);
    insert(9);
    std::cout << "Linked list is: ";
    display();
    return 0;
}