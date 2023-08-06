import { TypesOfOS } from "../components/OS_topics";

export const OS_text = {
    para1: "An operating system is a piece of software that manages all the resources of a computer system, both hardware and software, and provides an environment in which the user can execute his/her programs in a convenient and efficient manner by hiding underlying complexity	of	the	hardware and acting	as a resource manager.",
    para2: "The	operating system provides the means for proper use of the resources in the operation of the computer system.",

    types_of_os : {

        main : {
            para1: "Operating systems provide several key functions, including managing system resources such as CPU, memory, and storage, controlling input and output operations, and ensuring system security and stability. They also provide a platform for running applications and managing files and data.",
            para2: "Different types of operating systems are designed to meet specific needs and requirements. Some operating systems are designed for single users on personal computers, while others are designed for large-scale enterprise environments with multiple users and complex network configurations.",
            para3: "Other types of operating systems are designed to support real-time applications that require immediate response and fast processing speeds. There are also operating systems that specialize in managing and controlling computer networks, while others focus on processing large volumes of data in batches.",
            para4: "Click on the types of operating systems on the left to learn more about each type.", 
        },

        single_process : {
            para1 : "A single-process operating system is an operating system that allows only one program or process to run at a time. In this type of operating system, the system resources such as the CPU, memory, and input/output devices are dedicated to a single process, which is the only program that is currently running.",
            para2 : "In a single-process operating system, the user interacts with the operating system through a command line interface or a graphical user interface (GUI). The operating system manages the user's interactions with the computer, such as running programs and managing files, but it only allows one program to run at a time.",
            para3: "One of the advantages of a single-process operating system is its simplicity. Because only one program is running at a time, the operating system does not have to manage complex multitasking and interprocess communication mechanisms. This makes the operating system more reliable and easier to maintain.",
            para4: "However, the downside of a single-process operating system is that it is not very efficient. When a program is running, the operating system cannot do anything else, so the system is not very responsive to user input. This can be frustrating for users who are trying to run multiple programs at once.",
            para5: "In summary, a single-process operating system is a simple operating system that allows only one program to run at a time. While it has its advantages in terms of simplicity and reliability, it may not be very efficient for users who need to run multiple programs simultaneously.",
            caption : "Single Process OS, from turorialspoint.com"
        },

        batch_process : {
            para1: "A batch processing operating system is an operating system that processes a large number of similar jobs or tasks in a batch or group. In this type of operating system, multiple programs or jobs are submitted together as a batch, and the operating system processes them one after the other, without any user interaction during the processing of each job.",
            para2: "In a batch processing system, each job is typically executed without any user intervention, which makes it ideal for processing large volumes of similar tasks, such as payroll processing or bank transactions. Jobs are usually submitted to the operating system through a batch processing system, which is a program that manages the queue of jobs to be processed.",
            para3: "The operating system performs a number of tasks in a batch processing system. First, it reads the input data for each job from a storage device such as a disk. Next, it loads the program and the data into memory, and then executes the program. Once the job has completed, the output data is written to a storage device, and the next job in the batch is processed.",
            para4: "One of the advantages of a batch processing system is that it is very efficient for processing large volumes of similar tasks. Because the operating system can process jobs without user intervention, it can run continuously, without any downtime. This makes it ideal for tasks such as payroll processing or credit card transactions.",
            para5: "However, the downside of a batch processing system is that it is not very interactive. Users cannot interact with the system while a job is being processed, and they must wait for their jobs to complete before they can receive any output. This can be frustrating for users who need to interact with the system in real-time.",
            para6: "In summary, a batch processing operating system is an operating system that processes a large number of similar jobs in a batch or group. While it is very efficient for processing large volumes of similar tasks, it is not very interactive and can be frustrating for users who need to interact with the system in real-time.",
            caption : "Batch Processing OS, from geekforgeeks.org"
        },

        multi_program : {
            para1: "A multiprogramming operating system is an operating system that allows multiple programs or processes to run simultaneously on a computer system. In a multiprogramming system, the CPU is shared among multiple processes, which are loaded into memory and executed in a time-shared manner.",
            para2:  "The primary goal of a multiprogramming operating system is to maximize CPU utilization by allowing multiple programs to run concurrently. This is achieved through the use of techniques such as time-sharing and virtual memory. Time-sharing is a technique that allows each process to be allocated a small amount of CPU time before switching to another process, while virtual memory allows the operating system to allocate memory to each process as needed.",
            para3: "One of the advantages of a multiprogramming operating system is that it improves system efficiency by allowing multiple programs to run concurrently. This can improve system throughput and reduce the amount of time users have to wait for their programs to complete. Additionally, it allows the system to handle multiple user requests at the same time, making it more interactive and responsive.",
            para4: "However, the downside of a multiprogramming operating system is that it can be complex and difficult to manage. The operating system must manage multiple processes and allocate system resources such as CPU time, memory, and input/output devices. This can lead to issues such as deadlock and resource contention, where processes compete for the same resources and cause delays in processing.",
            para5: "In summary, a multiprogramming operating system is an operating system that allows multiple programs or processes to run concurrently on a computer system. While it improves system efficiency and interactivity, it can also be complex and difficult to manage.",
            caption : "Multiprogramming OS, from scaler.com",
        },

        multi_tasking : {
            para1 : "A multitasking operating system is a type of operating system that allows multiple applications or processes to run concurrently on a computer system. In other words, it can handle more than one task or process at the same time, allowing users to switch between different applications seamlessly.",
            para2: "Multitasking operating systems manage the resources of the computer system, such as the central processing unit (CPU), memory, and input/output devices, to ensure that each application or process receives the necessary resources to function properly. They use scheduling algorithms to allocate CPU time to different tasks, allowing them to run simultaneously without interfering with one another.",
            para3: "Multitasking operating systems provide several benefits, including improved productivity, faster application response times, and better resource utilization. For example, a user can work on a word processing document while simultaneously downloading files from the internet and listening to music, all without any noticeable performance degradation.",
            para4: "Multitasking operating systems come in different types, ranging from single-user systems to multi-user systems used in enterprise environments. Some examples of multitasking operating systems include Windows, macOS, and Linux.",
            para5: "Overall, multitasking operating systems are a fundamental component of modern computing, allowing users to work more efficiently and effectively by running multiple applications or processes simultaneously.",
            caption: "Multitasking OS, from byjus.com",
        },

        multi_process : {
            para1: "A multiprocessing operating system is a type of operating system that is designed to take advantage of multiple central processing units (CPUs) or processor cores within a computer system. It is different from a multitasking operating system, which can handle multiple tasks or processes, but still runs on a single CPU.",
            para2: "Multiprocessing operating systems use specialized algorithms to divide tasks and processes among multiple CPUs or cores, allowing for parallel processing and improved performance. This means that multiple processes can be executed simultaneously, improving system throughput and reducing the time needed to complete complex tasks.",
            para3: "These operating systems are commonly used in high-performance computing environments, such as scientific simulations, data analysis, and computer-aided design. They can also be used in servers and other enterprise environments to handle multiple concurrent user requests.",
            para4: "Examples of multiprocessing operating systems include Windows Server, Linux, and Unix. These operating systems can be configured to take advantage of multiple CPUs or cores, providing improved performance and scalability for demanding applications.",
            para5: "Overall, multiprocessing operating systems are a type of operating system that is designed to take advantage of multiple CPUs or cores within a computer system. They can be used in high-performance computing environments to improve system throughput and reduce the time needed to complete complex tasks.",
            caption: "Multiprocessing OS, from javatpoint.com",
        },

        real_time : {
            para1 : "A real-time operating system (RTOS) is a type of operating system that is designed to handle applications and processes with strict timing requirements. It is used in systems where the response time to an event is critical and needs to be guaranteed, such as in industrial control systems, medical devices, and aerospace systems.",
            para2 : "RTOS are characterized by their ability to respond to events and inputs within a specific time frame, known as a deadline. They achieve this by prioritizing tasks, providing fast and predictable response times, and minimizing system overhead. They also provide features such as task scheduling, interrupt handling, and memory management that are optimized for real-time performance.",
            para3 : "There are three types of RTOS: hard real-time, soft real-time, and firm real-time. A hard real-time operating system guarantees that tasks will be completed before their deadlines, even if other tasks are running at the same time. A soft real-time operating system can allow some tasks to miss their deadlines, as long as the overall system performance remains within acceptable limits. A firm real-time operating system is a hybrid between hard and soft real-time systems, providing a balance between strict timing requirements and a degree of flexibility.",
            para4 : "Examples of real-time operating systems include QNX, VxWorks, and FreeRTOS. These operating systems are used in a wide range of applications, including automotive systems, telecommunications, and military systems.",
            para5 : "Overall, real-time operating systems are essential for applications where timing and response are critical, providing reliable and predictable performance in a variety of demanding environments.",
            caption : "Real Time OS, from guru99.com",
        },

        distributed : {
            para1 : "A distributed operating system is a type of operating system that runs on multiple interconnected computers or nodes, working together as a single system. Unlike a traditional operating system that runs on a single machine, a distributed operating system manages resources across a network of computers, allowing them to work together as a unified system.",
            para2 : "Distributed operating systems provide a range of benefits, including improved performance, scalability, and fault tolerance. By distributing tasks across multiple nodes, they can handle large workloads more efficiently than a single machine. Additionally, if one node fails or experiences an issue, the other nodes can continue to function, ensuring that the system remains available.",
            para3 : "Distributed operating systems typically include features such as process management, file systems, and networking protocols, which are optimized for distributed environments. They also provide mechanisms for communication and coordination between nodes, such as message passing and remote procedure calls.",
            para4 : "Examples of distributed operating systems include Linux Cluster, Apache Hadoop, and Google's Spanner. These operating systems are used in a variety of applications, including high-performance computing, data storage and processing, and cloud computing.",
            para5 : "Overall, distributed operating systems provide a powerful and flexible platform for managing resources across a network of computers, enabling applications to run more efficiently, scale as needed, and remain available in the event of failures or issues.",
            caption : "Distributed OS, from scaler.com",
        },
    },

    pntm : {
        main : {
            para1 : "Process and thread management is a crucial aspect of operating systems. An operating system is responsible for managing the execution of processes and threads, which are individual units of execution within a process. A process is a running program that consists of instructions and data, while a thread is a subset of a process that can be scheduled independently and execute concurrently with other threads within the same process.",
            para2: "The operating system manages the execution of processes and threads by allocating system resources such as CPU time, memory, and input/output devices. The operating system also provides various mechanisms for process and thread communication and synchronization, which are essential for ensuring that processes and threads can cooperate and communicate effectively.",
            para3: "In a typical operating system, process and thread management involve several key functions, including process scheduling, thread creation and management, synchronization, and communication between threads. Process scheduling determines which process should be executed next based on factors such as process priority, CPU utilization, and the amount of time the process has already spent executing. Thread creation and management involve creating and managing threads within a process, including thread scheduling and synchronization.",
            para4: "Synchronization is the process by which threads coordinate with each other to ensure that they do not interfere with each other's execution. Operating systems use synchronization techniques such as locks and semaphores to control access to shared resources and prevent race conditions, deadlocks, and other synchronization-related problems.",
            para5: "Communication between threads is another crucial aspect of process and thread management. Operating systems provide mechanisms such as message passing and shared memory to facilitate communication between threads, which can be used to exchange data and coordinate their execution.",
            para6: "By understanding the various aspects of process and thread management, we can gain a better understanding of how operating systems manage the execution of programs and ensure that they run efficiently and reliably.",
        },

        process_scheduling: {
            para1: "Process scheduling is a critical function of an operating system. It determines which process should be executed next based on factors such as process priority, CPU utilization, and the amount of time the process has already spent executing. The goal of process scheduling is to ensure that processes are executed efficiently and fairly, so that no process is left waiting for an excessively long time.",
            para2: "Modern operating systems use scheduling algorithms to perform process scheduling. These algorithms can be classified into two categories: preemptive and non-preemptive scheduling. Preemptive scheduling allows the operating system to interrupt a running process and schedule another process, while non-preemptive scheduling allows the currently running process to complete its execution before scheduling another process.",
            para3: "One common preemptive scheduling algorithm used in operating systems is round-robin scheduling. In round-robin scheduling, each process is allocated a fixed amount of CPU time, called a time slice or quantum. When a process's time slice expires, the operating system interrupts the process and schedules another process. The interrupted process is placed back in the ready queue and will be scheduled again when it reaches the head of the queue.",
            // round-robin image
            caption1: "Round-robin scheduling, from boardinfinity.com",
            para4: "Another common scheduling algorithm used in operating systems is priority-based scheduling. In priority-based scheduling, each process is assigned a priority level based on factors such as its importance and resource requirements. The operating system schedules the process with the highest priority first and uses a preemptive mechanism to ensure that higher priority processes are executed before lower priority processes.",
            // priority-based image
            caption2: "Priority-based scheduling, from data-flair.training",
            para5: "In addition to round-robin and priority-based scheduling, there are many other scheduling algorithms used in operating systems, such as shortest job first, earliest deadline first, and multilevel feedback queue scheduling. Each scheduling algorithm has its strengths and weaknesses, and the choice of algorithm depends on the specific requirements of the operating system and the applications running on it.",
            // comparision image
            caption3: "Comparison of scheduling algorithms, from kelvin.ink",
            para6: "To ensure that processes are executed efficiently, modern operating systems also use techniques such as process migration, load balancing, and process affinity. Process migration involves moving a process from one CPU to another, while load balancing involves distributing the workload across multiple CPUs to ensure that they are utilized equally. Process affinity refers to the preference for a process to be scheduled on a particular CPU based on factors such as CPU cache usage and process execution history.",
            // load balancing image
            caption4: "Load balancing, from geeksforgeeks.org",
            para7: "In summary, process scheduling is a critical function of an operating system that determines which process should be executed next. Operating systems use scheduling algorithms such as round-robin and priority-based scheduling to ensure that processes are executed efficiently and fairly. Additionally, modern operating systems use techniques such as process migration, load balancing, and process affinity to further optimize process scheduling.",
        },
        
        thread_creation_and_management: {
            para1: "Threads are lightweight processes that enable concurrent execution within a single process. Thread creation and management is an important aspect of operating systems that enables efficient utilization of system resources.",
            para2: "Thread creation can be done in two ways: user-level threads and kernel-level threads. User-level threads are created and managed by user-level libraries, while kernel-level threads are created and managed by the operating system kernel.",
            // User level vs kernel level threads image
            caption1: "User-level vs kernel-level threads, from www.javatpoint.com",
            para3: "User-level threads are generally faster to create and manage than kernel-level threads, but they have some limitations. User-level threads cannot take advantage of multi-core processors and cannot perform blocking operations without blocking the entire process. Kernel-level threads, on the other hand, can take advantage of multi-core processors and can perform blocking operations independently",
            para4: "Thread management involves scheduling threads for execution and synchronizing their access to shared resources. Thread scheduling is similar to process scheduling, but instead of scheduling entire processes, individual threads are scheduled for execution based on factors such as thread priority and CPU utilization.",
            para5: "Thread synchronization is necessary to ensure that threads do not access shared resources simultaneously, which can result in data inconsistency and race conditions. Operating systems provide synchronization mechanisms such as semaphores, mutexes, and condition variables to enable thread synchronization.",
            // Thread synchronization image
            caption2: "Thread synchronization, from tutorialcup.com",
            para6: "In addition to scheduling and synchronization, thread management also involves thread creation, termination, and context switching. Thread creation involves allocating resources for the thread and initializing its context, while thread termination involves freeing the resources allocated for the thread. Context switching is the process of saving the current thread's context and loading the context of the next thread to be executed.",
            // Context switching image
            caption3: "Context switching, from www.javatpoint.com",
            para7: "To optimize thread creation and management, modern operating systems use techniques such as thread pooling, which involves maintaining a pool of pre-allocated threads that can be reused for different tasks, and thread affinity, which refers to the preference for a thread to be executed on a particular CPU based on factors such as CPU cache usage and thread execution history.",
            // Thread pooling and affinity image
            caption4: "Thread pooling and affinity, from jenkov.com",
            para8: "In summary, thread creation and management is an important aspect of operating systems that enables efficient utilization of system resources. Thread creation can be done in two ways: user-level threads and kernel-level threads. Thread management involves scheduling threads for execution and synchronizing their access to shared resources. Modern operating systems use techniques such as thread pooling and thread affinity to optimize thread creation and management.",
        },

        synchronization: {
            para1: "Synchronization is the process of coordinating the activities of multiple threads or processes to ensure that they do not interfere with each other when accessing shared resources. Synchronization is necessary to prevent race conditions and ensure data consistency.",
            para2: "Operating systems provide several synchronization mechanisms to enable thread and process synchronization, including semaphores, mutexes, and condition variables.",
            // Synchronization mechanisms image
            sub_heading1: "Semaphores",
            para3: "Semaphores can be binary (0 or 1) or counting (positive integer), depending on whether the semaphore is used for signaling between two or more processes/threads or for managing a pool of resources with finite capacity. There are two main types of semaphore operations:",
            // list of semaphore operations
            list1: [
                "wait() - decrements the semaphore value by 1, blocking the process/thread if the semaphore value is already 0.",
                "signal() - increments the semaphore value by 1, waking up any waiting process/thread if there is one."
            ],
            // Semaphore image
            caption1: "Semaphore, from www.keil.com",
            para4: "Semaphore can be implemented in various ways - by using a simple integer variable or a data structure. Semaphore can be used to solve several synchronization problems, including producer-consumer problem, readers-writers problem, and dining philosophers problem.",
            sub_heading2: "Mutex",
            para5: "Mutex is short for \"mutual exclusion\". It is a synchronization mechanism used to control access to a shared resource in a concurrent system. A mutex is essentially a binary semaphore with an ownership concept - it can only be released by the thread that acquired it. This ownership concept ensures that only one thread at a time can hold the mutex, thereby preventing race conditions and other synchronization errors that can occur when multiple threads try to access a shared resource simultaneously.",
            para6: "Mutex operations include:",
            // list of mutex operations
            list2: [
                "Lock (acquire): This attempts to acquire the lock and waits if it is already held by another thread or process.",
                "Unlock (release): This releases the lock, allowing another thread or process to acquire it."
            ],
            // Mutex image
            caption2: "Mutex, from www.scaler.com",
            para7: "Mutexes are commonly used in multithreaded programming to prevent race conditions, deadlocks, and other synchronization problems. They can also be used in conjunction with condition variables to implement more complex synchronization patterns.",
            sub_heading3: "Condition variables",
            para8: "A condition variable is a synchronization mechanism that allows threads to wait for a certain condition to become true before proceeding. A condition variable is always used in conjunction with a mutex, and is typically implemented as a separate object or data structure.",
            para9: "A condition variable provides two main operations:",
            // list of condition variable operations
            list3: [
                "wait() - releases the mutex and waits for the condition variable to be signaled. When the condition variable is signaled, the wait() method re-acquires the mutex and returns.",
                "signal() - signals the condition variable, waking up one of the threads that is waiting on it. If no threads are waiting on the condition variable, the signal() method has no effect."
            ],
            // Condition variable image
            caption3: "Condition variable, from www.embeddedlinux.org.cn",
            para10: "Condition variables are commonly used in multithreaded programming to implement synchronization patterns that require threads to wait for certain events or conditions before proceeding such as producer-consumer problem, readers-writers problem, and dining philosophers problem.",
            sub_heading4: "Deadlocks",
            para11: "A deadlock occurs when two or more threads are blocked indefinitely, waiting for each other to release the resources they need to proceed. Deadlocks are a common problem in multi-threaded programming, and can occur when threads acquire and hold resources in an inconsistent order. For example, if thread A acquires resource X and then tries to acquire resource Y, and thread B acquires resource Y and then tries to acquire resource X, then both threads will be blocked indefinitely, waiting for the other thread to release the resource they need to proceed.",
            // Deadlock image
            caption4: "Deadlock, from www.javatpoint.com",
            para12: "There are four necessary conditions for a deadlock to occur:",
            // list of deadlock conditions
            list4: [
                "Mutual Exclusion: At least one resource must be held in a non-shareable mode, such that only one thread can use the resource at a time.",
                "Hold and Wait: A thread must be holding at least one resource and waiting to acquire additional resources held by other threads.",
                "No Preemption: Resources cannot be preempted (i.e., forcibly removed from a thread that is holding them) and must be released only voluntarily by the thread holding them.",
                "Circular Wait: There exists a set of threads {T1, T2, ..., Tn} such that T1 is waiting for a resource held by T2, T2 is waiting for a resource held by T3, ..., and Tn is waiting for a resource held by T1."
            ],
            para13: "If these four conditions hold simultaneously, a deadlock is inevitable.\nThere are several techniques for avoiding and resolving deadlocks, including:",
            // list of deadlock avoidance techniques
            list5: [
                "Prevention: One way to prevent deadlocks is to ensure that at least one of the four necessary conditions listed above does not hold. For example, we can ensure that circular waits do not occur by imposing a total ordering on all resources and requiring that each thread request resources in an increasing order of resource numbers. This technique is often difficult to apply in practice, however, as it may require significant changes to the code.",
                "Avoidance: Another approach to deadlock prevention is to use a resource allocation algorithm that guarantees that the system will never enter a deadlock state. This technique requires a priori knowledge of all the resources a thread will need throughout its execution, which is often difficult to determine in practice.",
                "Detection and Recovery: A third approach to dealing with deadlocks is to detect them when they occur and take corrective action to recover from them. This can be done using algorithms that periodically check for the existence of circular wait conditions and take appropriate action when they are detected. Recovery actions might include releasing resources held by some threads, preempting resources held by others, or rolling back the execution of one or more threads to a previous state.",
                "Ignoring the Problem: Finally, we can choose to ignore the problem of deadlocks altogether, on the assumption that they are unlikely to occur in practice. This approach is often taken in systems that are not considered critical or where the likelihood of deadlocks occurring is extremely low."
            ],
            para14: "It is important to note that deadlocks can have serious consequences in real-world applications, including causing system crashes, data loss, and other unexpected behaviors. Therefore, it is generally advisable to take steps to prevent, avoid, detect, and recover from deadlocks whenever possible.",
            // Summary of synchronization
            para15: "In summary, synchronization is the process of coordinating the activities of multiple threads or processes to ensure that they do not interfere with each other when accessing shared resources. Operating systems provide several synchronization mechanisms, including semaphores, mutexes, and condition variables, to enable synchronization. Synchronization can lead to problems such as deadlocks, which can be prevented by using techniques such as resource ordering and deadlock detection and recovery."
        },

        communication_between_threads: {
            para1: "Threads within the same process share the same memory space, which makes it easy for them to communicate with each other. However, to ensure proper synchronization and avoid race conditions, threads often need to coordinate their activities and exchange information. There are several mechanisms for inter-thread communication, including shared memory, message passing, and pipes.",

            sub_heading1: "Shared memory",
            para2: "Shared memory is a technique for inter-process communication that allows multiple processes to access the same region of memory. Shared memory can also be used for inter-thread communication, as long as the threads are within the same process. In shared memory, a region of memory is allocated and marked as shared, which means that it can be accessed by multiple threads/processes. Threads can read and write to the shared memory region just like any other region of memory, but they must use synchronization primitives, such as semaphores or mutexes, to avoid race conditions.",
            // Shared memory image
            caption1: "Shared memory, from www.javatpoint.com",
            para3: "One advantage of shared memory is that it is very fast, since there is no overhead for copying data between processes/threads. However, shared memory can be difficult to use correctly, since it requires careful synchronization to avoid race conditions and other synchronization problems.",

            sub_heading2: "Message passing",
            para4: "Message passing is a mechanism for inter-process and inter-thread communication that involves sending messages between processes/threads. In message passing, each process/thread has its own private memory space, and messages are sent and received using special system calls. Messages can be of fixed or variable size, and can contain any type of data.",
            para5: "In a typical message passing scenario, one thread sends a message to another thread, which then receives the message and processes it. Message passing can be either synchronous or asynchronous. In synchronous message passing, the sender blocks until the receiver has received the message, while in asynchronous message passing, the sender sends the message and continues executing without waiting for a response.",
            // Message passing image
            caption2: "Message passing, from hpc.nmsu.edu",
            para6: "One advantage of message passing is that it is relatively easy to use, since the operating system handles the details of sending and receiving messages. However, message passing can be slower than shared memory, since there is overhead for copying data between processes/threads.",

            sub_heading3: "Pipes",
            para7: "A pipe is a mechanism for inter-process communication that involves creating a virtual file between two processes/threads. A pipe has a read end and a write end, and data written to the write end can be read from the read end. Pipes are typically used for communication between a parent process and its child processes, but they can also be used for inter-thread communication.",
            para8: "In a typical pipe scenario, one thread writes data to the write end of the pipe, while another thread reads data from the read end of the pipe. Pipes can be either named or anonymous. Named pipes have a well-known name and can be used by any process/thread that knows the name, while anonymous pipes are created by a process/thread and can only be used by that process/thread and its child processes.",
            // Pipe image
            caption3: "Pipes, from www.it.uu.se",
            para9: "One advantage of pipes is that they are relatively easy to use, since they behave like normal files. However, pipes can be slower than shared memory or message passing, since data must be copied between processes/threads.",
        },

    },
}