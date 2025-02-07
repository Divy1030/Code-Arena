import React from 'react';
import Cover from '../../components/animations/Cover';
import CodeBlock from '../../components/animations/CodeBlock';

const FocusOnCode = ({ isDarkMode }) => {
  return (
    <div className={`min-h-[50vh] md:min-h-[75vh] lg:min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} py-8 md:py-16`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Focus on what really matters:<Cover>the Code</Cover>
          </h1>
          <p className={`text-xl mb-6 md:mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            Build skills-based coding tests with tech problems a developer would
            encounter on the job — and hire the team behind your next big idea.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 md:mt-12">
          <CodeBlock
            language="cpp"
            code={`#include <iostream>\nusing namespace std;
class Node {
public:
    int data;
    Node* next;
    Node(int new_data) {
        this->data = new_data;
        this->next = nullptr;
    }
};
void traverseList(Node* head) {
    while (head != nullptr) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}
int main() {
    Node* head = new Node(10);
    head->next = new Node(20);
    head->next->next = new Node(30);
    head->next->next->next = new Node(40);
    traverseList(head);
    return 0;
}
`}
            highlightLines={[3]}
          />
        </div>
      </div>
    </div>
  );
};

export default FocusOnCode;