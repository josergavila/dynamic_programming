#include <iostream>

struct Node
{
    int data;
    struct Node* next;
};
struct Node* head;
int size = 0;

void insert(int new_data)
{
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = head;
    head = new_node;
}

void insertPos(Node** current, int pos, int data)
{
	if (pos < 1 || pos > size + 1) 
	{
		std::cout << "Invalid Position!\n" << std::endl;
	}
	else
	{
		while (pos--) {
			if (pos == 0)
			{
				Node* temp = getNode(data);
				temp->next = *current;
				*current = temp;
			}
			else
			{


			}
		}
		size++;
	}
}

void Print()
{
    struct Node* ptr;
    ptr = head;
    std::cout << "Linked list is: ";
    while(ptr != NULL)
    {
        std::cout << ptr->data << " ";
        ptr = ptr->next;
    }
    std::cout << std::endl;
}

int main()
{
	head = NULL;
	std::cout << "How many numbers?" << std::endl;
	int n, i, x;
	std::cin >> n;
	for (i = 0; i < n; i++) 
	{
		std::cout << "Enter number: ";
		std::cin >> x;
		insert(x);
		std::cout << "\nNumber Added";
	}
	size = n;

    Print();
    return 0;
}
