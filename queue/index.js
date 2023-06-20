const readline = require('readline');
const clear = require('clear');
const Queue = require('./Queue')

let counter = 0;
const COMMANDS = [
    'deQueue' , 'enQueue' , 'peek' , 'size' , 'isEmpty' , 'isFull'
]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const queue = new Queue(printStatus)

function printInterface() {
    clear()
    console.log('QUEUE MANAGEMENT \n')

    if (queue.list.length) {
        console.log(`Queue items: ${queue.list.join(' -- ')} \n`)
    }

    console.log(`Options: \n[${COMMANDS.join(' - ')}] \n`)

    rl.question('What do you want to do?\n', (userInput) => {
        const [input, commands] = [userInput.toLowerCase(), COMMANDS.map(el => el.toLowerCase())]

        if (input == 'enqueue') {
            queue.enQueue(counter)
            counter++
        }

        if (input == 'dequeue') {
            queue.deQueue()
        }

        if (input == 'size') {
            queue.size()
        }
        if (input == 'peek') {
            queue.peek()
        }

        if (input == 'isempty') {
            queue.isEmpty()
        }

        if (input == 'isfull') {
            queue.isFull()
        }


        if (!commands.includes(input)) {
          printStatus('Command does not exist. Try again')
        }
    });
}

printInterface()

function printStatus (message) {
  console.log(`\n${message}\n`)
  setTimeout(printInterface, 2000)
}
