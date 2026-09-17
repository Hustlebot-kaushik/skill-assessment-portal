// Secondary-level question bank — 400 questions, 5 categories × 80
// Compatible with the existing Skill Assessment Portal.

window.QUESTIONS_SECONDARY = {
  "Basic Computers": [
    {
      id: "m_comp1",
      question: "Which OSI layer is responsible for logical addressing and routing?",
      options: ["Network", "Transport", "Data Link", "Session"],
      correctIndex: 0
    },
    {
      id: "m_comp2",
      question: "Which protocol securely transfers files using SSH?",
      options: ["SFTP", "SMTP", "SNMP", "TFTP"],
      correctIndex: 0
    },
    {
      id: "m_comp3",
      question: "Which protocol automatically assigns IP configuration to hosts?",
      options: ["DHCP", "DNS", "ARP", "ICMP"],
      correctIndex: 0
    },
    {
      id: "m_comp4",
      question: "Which protocol is used by the ping utility?",
      options: ["ICMP", "FTP", "SMTP", "ARP"],
      correctIndex: 0
    },
    {
      id: "m_comp5",
      question: "Which device primarily operates at the Data Link layer to forward frames using MAC addresses?",
      options: ["Switch", "Router", "Repeater", "Modem"],
      correctIndex: 0
    },
    {
      id: "m_comp6",
      question: "Which device separates broadcast domains by default?",
      options: ["Router", "Hub", "Repeater", "Bridge"],
      correctIndex: 0
    },
    {
      id: "m_comp7",
      question: "Which IPv4 address is a private address?",
      options: ["192.168.1.10", "8.8.8.8", "1.1.1.1", "172.40.1.2"],
      correctIndex: 0
    },
    {
      id: "m_comp8",
      question: "How many bits are in an IPv4 address?",
      options: ["32", "16", "64", "128"],
      correctIndex: 0
    },
    {
      id: "m_comp9",
      question: "How many bits are in an IPv6 address?",
      options: ["128", "32", "64", "256"],
      correctIndex: 0
    },
    {
      id: "m_comp10",
      question: "Which subnet mask corresponds to /24?",
      options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.128"],
      correctIndex: 0
    },
    {
      id: "m_comp11",
      question: "Which data structure is best suited to implement function-call recursion?",
      options: ["Stack", "Queue", "Heap", "Graph"],
      correctIndex: 0
    },
    {
      id: "m_comp12",
      question: "Which traversal of a binary search tree visits nodes in sorted order?",
      options: ["Inorder", "Preorder", "Postorder", "Level order"],
      correctIndex: 0
    },
    {
      id: "m_comp13",
      question: "Which algorithmic technique stores solutions to overlapping subproblems?",
      options: ["Dynamic programming", "Greedy scanning", "Linear probing", "Randomization only"],
      correctIndex: 0
    },
    {
      id: "m_comp14",
      question: "What is the worst-case complexity of merge sort?",
      options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
      correctIndex: 0
    },
    {
      id: "m_comp15",
      question: "What is the average-case complexity of quicksort?",
      options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
      correctIndex: 0
    },
    {
      id: "m_comp16",
      question: "Which sorting algorithm has O(n²) worst-case time but can be O(n) on nearly sorted input?",
      options: ["Insertion sort", "Merge sort", "Heap sort", "Binary search"],
      correctIndex: 0
    },
    {
      id: "m_comp17",
      question: "Which SQL clause groups rows having equal values?",
      options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
      correctIndex: 0
    },
    {
      id: "m_comp18",
      question: "Which SQL clause filters individual rows before grouping?",
      options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
      correctIndex: 0
    },
    {
      id: "m_comp19",
      question: "Which SQL operation combines rows from related tables?",
      options: ["JOIN", "SORT", "INDEX", "COMMIT"],
      correctIndex: 0
    },
    {
      id: "m_comp20",
      question: "Which JOIN returns matching rows from both tables?",
      options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "FULL JOIN only"],
      correctIndex: 0
    },
    {
      id: "m_comp21",
      question: "Which JOIN preserves all rows from the left table?",
      options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN only", "CROSS JOIN"],
      correctIndex: 0
    },
    {
      id: "m_comp22",
      question: "Which database object can store a reusable query result definition?",
      options: ["View", "Trigger", "Index only", "Cursor only"],
      correctIndex: 0
    },
    {
      id: "m_comp23",
      question: "Which database constraint prevents duplicate values in a column?",
      options: ["UNIQUE", "CHECK", "DEFAULT", "FOREIGN KEY"],
      correctIndex: 0
    },
    {
      id: "m_comp24",
      question: "Which constraint requires a column to contain a value?",
      options: ["NOT NULL", "DEFAULT", "UNIQUE", "INDEX"],
      correctIndex: 0
    },
    {
      id: "m_comp25",
      question: "Which ACID property means a transaction is all-or-nothing?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      correctIndex: 0
    },
    {
      id: "m_comp26",
      question: "Which ACID property means committed data survives a system failure?",
      options: ["Durability", "Atomicity", "Isolation", "Consistency"],
      correctIndex: 0
    },
    {
      id: "m_comp27",
      question: "Which SQL command permanently saves a transaction's changes?",
      options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "GRANT"],
      correctIndex: 0
    },
    {
      id: "m_comp28",
      question: "Which SQL command undoes uncommitted transaction changes?",
      options: ["ROLLBACK", "COMMIT", "MERGE", "REVOKE"],
      correctIndex: 0
    },
    {
      id: "m_comp29",
      question: "Which index structure is commonly used for efficient range queries in relational databases?",
      options: ["B-tree", "Stack", "Queue", "Hash set only"],
      correctIndex: 0
    },
    {
      id: "m_comp30",
      question: "Which concept reduces unauthorized access by separating permissions from users?",
      options: ["Access control", "Compression", "Caching", "Compilation"],
      correctIndex: 0
    },
    {
      id: "m_comp31",
      question: "Which cryptographic technique uses a public/private key pair?",
      options: ["Asymmetric cryptography", "Symmetric cryptography", "Plain encoding", "Checksum"],
      correctIndex: 0
    },
    {
      id: "m_comp32",
      question: "Which security property ensures data cannot be read by unauthorized parties?",
      options: ["Confidentiality", "Availability", "Redundancy", "Portability"],
      correctIndex: 0
    },
    {
      id: "m_comp33",
      question: "Which security property ensures data has not been improperly altered?",
      options: ["Integrity", "Confidentiality", "Scalability", "Usability"],
      correctIndex: 0
    },
    {
      id: "m_comp34",
      question: "Which attack floods a service with traffic from many compromised systems?",
      options: ["DDoS", "Phishing", "SQL injection", "Brute-force login only"],
      correctIndex: 0
    },
    {
      id: "m_comp35",
      question: "Which vulnerability involves inserting malicious SQL into application input?",
      options: ["SQL injection", "DNS spoofing", "Buffer scheduling", "Packet fragmentation"],
      correctIndex: 0
    },
    {
      id: "m_comp36",
      question: "Which vulnerability can occur when untrusted input is inserted into a webpage as executable script?",
      options: ["Cross-site scripting", "ARP poisoning", "Port scanning", "DDoS"],
      correctIndex: 0
    },
    {
      id: "m_comp37",
      question: "Which HTTP status indicates a successful request?",
      options: ["200", "301", "404", "500"],
      correctIndex: 0
    },
    {
      id: "m_comp38",
      question: "Which HTTP status indicates a permanent redirect?",
      options: ["301", "200", "403", "503"],
      correctIndex: 0
    },
    {
      id: "m_comp39",
      question: "Which HTTP status commonly indicates forbidden access?",
      options: ["403", "201", "302", "504"],
      correctIndex: 0
    },
    {
      id: "m_comp40",
      question: "Which HTTP method is generally idempotent and commonly replaces a resource?",
      options: ["PUT", "POST", "PATCH only", "CONNECT"],
      correctIndex: 0
    },
    {
      id: "m_comp41",
      question: "Which JavaScript feature lets code wait for a Promise to settle using readable syntax?",
      options: ["async/await", "switch/case", "forEach only", "prototype"],
      correctIndex: 0
    },
    {
      id: "m_comp42",
      question: "Which Promise state means it completed successfully?",
      options: ["Fulfilled", "Pending", "Rejected", "Blocked"],
      correctIndex: 0
    },
    {
      id: "m_comp43",
      question: "Which JavaScript structure stores key-value pairs with unique keys?",
      options: ["Map", "Array", "Set only", "String"],
      correctIndex: 0
    },
    {
      id: "m_comp44",
      question: "Which JavaScript structure stores unique values?",
      options: ["Set", "Map", "Array", "Object only"],
      correctIndex: 0
    },
    {
      id: "m_comp45",
      question: "Which HTTP header commonly carries a bearer access token?",
      options: ["Authorization", "Accept-Language", "Referer", "Host only"],
      correctIndex: 0
    },
    {
      id: "m_comp46",
      question: "Which architecture separates presentation, business logic, and data access into layers?",
      options: ["Layered architecture", "Peer-to-peer only", "Bus topology", "Flat file"],
      correctIndex: 0
    },
    {
      id: "m_comp47",
      question: "Which API style commonly uses resources, HTTP methods, and stateless requests?",
      options: ["REST", "SMTP", "FTP", "BIOS"],
      correctIndex: 0
    },
    {
      id: "m_comp48",
      question: "What does statelessness in REST mean?",
      options: ["Each request contains the information needed to process it", "The server never stores any data", "Clients cannot authenticate", "Requests cannot use HTTP"],
      correctIndex: 0
    },
    {
      id: "m_comp49",
      question: "Which cloud feature automatically adds or removes resources based on demand?",
      options: ["Auto-scaling", "Encryption", "Version control", "Static routing"],
      correctIndex: 0
    },
    {
      id: "m_comp50",
      question: "Which cloud feature distributes traffic across multiple servers?",
      options: ["Load balancing", "Hashing", "Compiling", "Indexing"],
      correctIndex: 0
    },
    {
      id: "m_comp51",
      question: "Which container orchestration platform is widely used to manage containerized workloads?",
      options: ["Kubernetes", "Git", "MySQL", "Nginx"],
      correctIndex: 0
    },
    {
      id: "m_comp52",
      question: "Which file format is commonly used for Kubernetes resource manifests?",
      options: ["YAML", "MP3", "BMP", "EXE"],
      correctIndex: 0
    },
    {
      id: "m_comp53",
      question: "Which Linux command lists files in a directory?",
      options: ["ls", "cd", "pwd", "mkdir"],
      correctIndex: 0
    },
    {
      id: "m_comp54",
      question: "Which Linux command changes the current directory?",
      options: ["cd", "ls", "cat", "grep"],
      correctIndex: 0
    },
    {
      id: "m_comp55",
      question: "Which Linux command displays the current working directory?",
      options: ["pwd", "cd", "ls", "touch"],
      correctIndex: 0
    },
    {
      id: "m_comp56",
      question: "Which Linux command searches text using patterns?",
      options: ["grep", "chmod", "mkdir", "whoami"],
      correctIndex: 0
    },
    {
      id: "m_comp57",
      question: "Which Linux permission notation gives the owner read/write/execute and others read only?",
      options: ["744", "755", "644", "700"],
      correctIndex: 0
    },
    {
      id: "m_comp58",
      question: "Which Git command creates a new branch?",
      options: ["git branch", "git clone", "git stash", "git diff"],
      correctIndex: 0
    },
    {
      id: "m_comp59",
      question: "Which Git command switches to another branch in modern Git?",
      options: ["git switch", "git init", "git status", "git log"],
      correctIndex: 0
    },
    {
      id: "m_comp60",
      question: "Which Git operation combines histories from two branches?",
      options: ["merge", "clone", "stash", "tag"],
      correctIndex: 0
    },
    {
      id: "m_comp61",
      question: "Which Git command temporarily stores uncommitted changes?",
      options: ["git stash", "git reset", "git fetch", "git tag"],
      correctIndex: 0
    },
    {
      id: "m_comp62",
      question: "Which algorithm finds a minimum spanning tree using a growing tree from a starting vertex?",
      options: ["Prim's algorithm", "Dijkstra's algorithm", "BFS", "Binary search"],
      correctIndex: 0
    },
    {
      id: "m_comp63",
      question: "Which graph representation uses a matrix of edge relationships?",
      options: ["Adjacency matrix", "Linked stack", "Heap array", "Hash bucket"],
      correctIndex: 0
    },
    {
      id: "m_comp64",
      question: "Which traversal explores neighbors level by level?",
      options: ["BFS", "DFS", "Inorder", "Postorder"],
      correctIndex: 0
    },
    {
      id: "m_comp65",
      question: "Which traversal can be implemented recursively for graphs?",
      options: ["DFS", "BFS only", "Prim only", "Kruskal only"],
      correctIndex: 0
    },
    {
      id: "m_comp66",
      question: "Which programming concept allows a function to call itself?",
      options: ["Recursion", "Overloading", "Casting", "Indexing"],
      correctIndex: 0
    },
    {
      id: "m_comp67",
      question: "What is the base case in recursion used for?",
      options: ["To stop recursive calls", "To increase recursion depth", "To allocate every variable", "To sort the input"],
      correctIndex: 0
    },
    {
      id: "m_comp68",
      question: "Which exception-handling block normally contains code that may raise an exception in Python?",
      options: ["try", "except", "finally", "raise"],
      correctIndex: 0
    },
    {
      id: "m_comp69",
      question: "Which Python collection is immutable?",
      options: ["tuple", "list", "set", "dictionary"],
      correctIndex: 0
    },
    {
      id: "m_comp70",
      question: "Which Python collection stores key-value pairs?",
      options: ["dictionary", "tuple", "list", "string"],
      correctIndex: 0
    },
    {
      id: "m_comp71",
      question: "Which Python keyword defines a function?",
      options: ["def", "func", "function", "lambda only"],
      correctIndex: 0
    },
    {
      id: "m_comp72",
      question: "Which OOP principle hides implementation details behind an interface?",
      options: ["Abstraction", "Inheritance", "Recursion", "Iteration"],
      correctIndex: 0
    },
    {
      id: "m_comp73",
      question: "Which OOP mechanism allows methods with the same name to behave differently for different objects?",
      options: ["Polymorphism", "Normalization", "Indexing", "Parsing"],
      correctIndex: 0
    },
    {
      id: "m_comp74",
      question: "Which testing type checks how a system behaves under heavy traffic?",
      options: ["Load testing", "Unit testing", "Syntax testing", "Compilation testing"],
      correctIndex: 0
    },
    {
      id: "m_comp75",
      question: "Which testing type checks whether separate modules work together?",
      options: ["Integration testing", "Unit testing", "Static analysis only", "Syntax highlighting"],
      correctIndex: 0
    },
    {
      id: "m_comp76",
      question: "Which software practice automatically builds and tests code after changes?",
      options: ["Continuous integration", "Manual copying", "Disk formatting", "Packet routing"],
      correctIndex: 0
    },
    {
      id: "m_comp77",
      question: "Which protocol is commonly used to encrypt web traffic?",
      options: ["TLS", "ARP", "DHCP", "ICMP"],
      correctIndex: 0
    },
    {
      id: "m_comp78",
      question: "Which DNS record maps a hostname to an IPv4 address?",
      options: ["A", "MX", "CNAME", "TXT"],
      correctIndex: 0
    },
    {
      id: "m_comp79",
      question: "Which DNS record is used for mail-server information?",
      options: ["MX", "A", "PTR", "NS only"],
      correctIndex: 0
    },
    {
      id: "m_comp80",
      question: "Which mechanism converts a domain name into an IP address?",
      options: ["DNS resolution", "ARP resolution", "Port forwarding", "NAT traversal"],
      correctIndex: 0
    }
  ],
  "English": [
    {
      id: "m_eng1",
      question: "Choose the correct sentence.",
      options: ["She has finished her work.", "She have finished her work.", "She finishing her work.", "She finish her work yesterday."],
      correctIndex: 0
    },
    {
      id: "m_eng2",
      question: "Closest meaning of 'concise':",
      options: ["Brief and clear", "Very expensive", "Difficult to hear", "Unrelated"],
      correctIndex: 0
    },
    {
      id: "m_eng3",
      question: "Opposite of 'expand':",
      options: ["Contract", "Extend", "Enlarge", "Explain"],
      correctIndex: 0
    },
    {
      id: "m_eng4",
      question: "Correct spelling:",
      options: ["Accommodation", "Accomodation", "Acommodation", "Accommadation"],
      correctIndex: 0
    },
    {
      id: "m_eng5",
      question: "He is ___ honest person.",
      options: ["an", "a", "the", "no article"],
      correctIndex: 0
    },
    {
      id: "m_eng6",
      question: "She is interested ___ science.",
      options: ["in", "on", "at", "for"],
      correctIndex: 0
    },
    {
      id: "m_eng7",
      question: "Neither of the answers ___ correct.",
      options: ["is", "are", "were", "have"],
      correctIndex: 0
    },
    {
      id: "m_eng8",
      question: "By next month, they ___ the project.",
      options: ["will have completed", "complete", "completed", "had complete"],
      correctIndex: 0
    },
    {
      id: "m_eng9",
      question: "Passive: 'The chef cooked the meal.'",
      options: ["The meal was cooked by the chef.", "The meal cooked the chef.", "The chef was cooked by the meal.", "The meal is cooking by the chef."],
      correctIndex: 0
    },
    {
      id: "m_eng10",
      question: "Reported speech: He said, 'I am tired.'",
      options: ["He said that he was tired.", "He said that I am tired.", "He says that he was tired.", "He said that he is tired yesterday."],
      correctIndex: 0
    },
    {
      id: "m_eng11",
      question: "Correct punctuation:",
      options: ["However, I decided to stay.", "However I decided to stay.", "However I, decided to stay.", "However; I decided, to stay."],
      correctIndex: 0
    },
    {
      id: "m_eng12",
      question: "Which word is a noun?",
      options: ["Happiness", "Carefully", "Beautiful", "Quickly"],
      correctIndex: 0
    },
    {
      id: "m_eng13",
      question: "Which word is an adjective?",
      options: ["Strong", "Strength", "Strengthen", "Strongly"],
      correctIndex: 0
    },
    {
      id: "m_eng14",
      question: "Which word is an adverb?",
      options: ["Carefully", "Careful", "Care", "Caring"],
      correctIndex: 0
    },
    {
      id: "m_eng15",
      question: "Which sentence contains a conditional?",
      options: ["If it rains, we will stay inside.", "We stayed inside yesterday.", "The rain stopped.", "It is raining now."],
      correctIndex: 0
    },
    {
      id: "m_eng16",
      question: "Correct comparative form:",
      options: ["better", "more better", "gooder", "most better"],
      correctIndex: 0
    },
    {
      id: "m_eng17",
      question: "Correct superlative form:",
      options: ["most intelligent", "more intelligentest", "intelligenter", "most intelligenter"],
      correctIndex: 0
    },
    {
      id: "m_eng18",
      question: "I stayed home ___ I was ill.",
      options: ["because", "although", "unless", "while"],
      correctIndex: 0
    },
    {
      id: "m_eng19",
      question: "You ___ wear a helmet while riding.",
      options: ["should", "might", "would have", "could have"],
      correctIndex: 0
    },
    {
      id: "m_eng20",
      question: "She is coming, ___?",
      options: ["isn't she", "doesn't she", "won't she", "wasn't she"],
      correctIndex: 0
    },
    {
      id: "m_eng21",
      question: "Which sentence contains a dangling modifier?",
      options: ["Walking to college, the rain started.", "Walking to college, I saw the rain.", "While I walked to college, I saw the rain.", "I saw the rain while walking to college."],
      correctIndex: 0
    },
    {
      id: "m_eng22",
      question: "Correct subject-verb agreement:",
      options: ["The list of items is on the desk.", "The list of items are on the desk.", "The list of items were on the desk.", "The list of items have been on the desk."],
      correctIndex: 0
    },
    {
      id: "m_eng23",
      question: "Correct indirect question:",
      options: ["Could you tell me where the station is?", "Could you tell me where is the station?", "Could you tell where is the station?", "Could you tell me where was the station?"],
      correctIndex: 0
    },
    {
      id: "m_eng24",
      question: "Meaning of 'meticulous':",
      options: ["Very careful and precise", "Careless", "Extremely fast", "Uncertain"],
      correctIndex: 0
    },
    {
      id: "m_eng25",
      question: "Meaning of 'obsolete':",
      options: ["No longer in use", "Still developing", "Highly expensive", "Recently invented"],
      correctIndex: 0
    },
    {
      id: "m_eng26",
      question: "Meaning of 'ambiguous':",
      options: ["Having more than one possible meaning", "Completely obvious", "Very loud", "Impossible to pronounce"],
      correctIndex: 0
    },
    {
      id: "m_eng27",
      question: "The new policy will ___ everyone.",
      options: ["affect", "effect", "effects", "affecting"],
      correctIndex: 0
    },
    {
      id: "m_eng28",
      question: "The medicine had an immediate ___.",
      options: ["effect", "affect", "affects", "effective"],
      correctIndex: 0
    },
    {
      id: "m_eng29",
      question: "Choose correct parallel structure:",
      options: ["She likes reading, swimming, and cycling.", "She likes reading, swimming, and to cycle.", "She likes to read, swimming, and cycling.", "She likes reading, to swim, and cycling."],
      correctIndex: 0
    },
    {
      id: "m_eng30",
      question: "Correct semicolon use:",
      options: ["I was tired; I slept early.", "I was tired; so I slept.", "I was; tired I slept early.", "I was tired; because I worked."],
      correctIndex: 0
    },
    {
      id: "m_eng31",
      question: "Antonym of 'scarce':",
      options: ["Abundant", "Rare", "Limited", "Insufficient"],
      correctIndex: 0
    },
    {
      id: "m_eng32",
      question: "Synonym of 'reluctant':",
      options: ["Unwilling", "Eager", "Certain", "Joyful"],
      correctIndex: 0
    },
    {
      id: "m_eng33",
      question: "Meaning of 'pragmatic':",
      options: ["Practical and focused on workable solutions", "Dreamlike", "Extremely emotional", "Historically ancient"],
      correctIndex: 0
    },
    {
      id: "m_eng34",
      question: "Meaning of 'coherent':",
      options: ["Logical and well connected", "Extremely short", "Difficult to hear", "Physically hard"],
      correctIndex: 0
    },
    {
      id: "m_eng35",
      question: "Meaning of 'infer':",
      options: ["Reach a conclusion from evidence", "Repeat a sentence", "Ask a question", "Measure a distance"],
      correctIndex: 0
    },
    {
      id: "m_eng36",
      question: "Meaning of 'imply':",
      options: ["Suggest without stating directly", "Measure exactly", "Reject completely", "Copy word for word"],
      correctIndex: 0
    },
    {
      id: "m_eng37",
      question: "Choose the correct form: If I ___ more time, I would learn another language.",
      options: ["had", "have", "will have", "am having"],
      correctIndex: 0
    },
    {
      id: "m_eng38",
      question: "If she had studied, she ___.",
      options: ["would have passed", "passes", "would pass", "will pass"],
      correctIndex: 0
    },
    {
      id: "m_eng39",
      question: "The book ___ I borrowed was useful.",
      options: ["which", "who", "where", "whom"],
      correctIndex: 0
    },
    {
      id: "m_eng40",
      question: "The person ___ called you is outside.",
      options: ["who", "which", "whose", "where"],
      correctIndex: 0
    },
    {
      id: "m_eng41",
      question: "Correct possessive:",
      options: ["The students' projects", "The students projects", "The student's projects", "The students's projects"],
      correctIndex: 0
    },
    {
      id: "m_eng42",
      question: "Correct capitalization:",
      options: ["The Pacific Ocean is vast.", "the pacific ocean is vast.", "The pacific Ocean is vast.", "The Pacific ocean is vast."],
      correctIndex: 0
    },
    {
      id: "m_eng43",
      question: "Best transition for contrast:",
      options: ["However", "Therefore", "Moreover", "Similarly"],
      correctIndex: 0
    },
    {
      id: "m_eng44",
      question: "Best transition for a result:",
      options: ["Therefore", "However", "Meanwhile", "Although"],
      correctIndex: 0
    },
    {
      id: "m_eng45",
      question: "___ books were left on the table.",
      options: ["Their", "There", "They're", "Them"],
      correctIndex: 0
    },
    {
      id: "m_eng46",
      question: "___ going to attend the seminar.",
      options: ["They're", "Their", "There", "Them"],
      correctIndex: 0
    },
    {
      id: "m_eng47",
      question: "The keys are over ___.",
      options: ["there", "their", "they're", "them"],
      correctIndex: 0
    },
    {
      id: "m_eng48",
      question: "Correct spelling:",
      options: ["Privilege", "Privelege", "Priviledge", "Previlage"],
      correctIndex: 0
    },
    {
      id: "m_eng49",
      question: "Correct spelling:",
      options: ["Separate", "Seperate", "Seprate", "Seperete"],
      correctIndex: 0
    },
    {
      id: "m_eng50",
      question: "Correct spelling:",
      options: ["Entrepreneur", "Enterpreneur", "Entreprenuer", "Entreproneur"],
      correctIndex: 0
    },
    {
      id: "m_eng51",
      question: "Correct tense:",
      options: ["I have been living here since 2022.", "I am living here since 2022.", "I live here since 2022.", "I had been living here since 2022 now."],
      correctIndex: 0
    },
    {
      id: "m_eng52",
      question: "She ___ for two hours before the bus arrived.",
      options: ["had been waiting", "waits", "has waited", "is waiting"],
      correctIndex: 0
    },
    {
      id: "m_eng53",
      question: "The results ___ announced yesterday.",
      options: ["were", "was", "is", "has"],
      correctIndex: 0
    },
    {
      id: "m_eng54",
      question: "Correct use of 'fewer':",
      options: ["There are fewer students in the room today.", "There is fewer water today.", "We have fewer money than before.", "He has fewer patience today."],
      correctIndex: 0
    },
    {
      id: "m_eng55",
      question: "Correct use of 'less':",
      options: ["There is less traffic today.", "There are less cars today.", "There were less people today.", "She bought less books."],
      correctIndex: 0
    },
    {
      id: "m_eng56",
      question: "Noun form of 'decide':",
      options: ["Decision", "Decisive", "Decidingly", "Decided"],
      correctIndex: 0
    },
    {
      id: "m_eng57",
      question: "Adjective form of 'danger':",
      options: ["Dangerous", "Dangerously", "Danger", "Endanger"],
      correctIndex: 0
    },
    {
      id: "m_eng58",
      question: "Adverb form of 'quick':",
      options: ["Quickly", "Quickness", "Quick", "Quicken"],
      correctIndex: 0
    },
    {
      id: "m_eng59",
      question: "Correct use of 'despite':",
      options: ["Despite the rain, we played.", "Despite it rained, we played.", "Despite of the rain, we played.", "Despite the rain was heavy, we played."],
      correctIndex: 0
    },
    {
      id: "m_eng60",
      question: "Correct use of 'although':",
      options: ["Although it was late, we continued.", "Although of the delay, we continued.", "Although the delay, we continued.", "Although of being late, we continued."],
      correctIndex: 0
    },
    {
      id: "m_eng61",
      question: "Meaning of 'resilient':",
      options: ["Able to recover from difficulty", "Unable to change", "Very expensive", "Easily broken"],
      correctIndex: 0
    },
    {
      id: "m_eng62",
      question: "Meaning of 'inevitable':",
      options: ["Certain to happen", "Impossible to understand", "Easy to avoid", "Already completed"],
      correctIndex: 0
    },
    {
      id: "m_eng63",
      question: "Meaning of 'substantial':",
      options: ["Considerable in amount or importance", "Almost nonexistent", "Unrelated", "Temporary only"],
      correctIndex: 0
    },
    {
      id: "m_eng64",
      question: "Correct preposition: He insisted ___ going.",
      options: ["on", "to", "for", "at"],
      correctIndex: 0
    },
    {
      id: "m_eng65",
      question: "Correct preposition: She is capable ___ solving it.",
      options: ["of", "to", "for", "with"],
      correctIndex: 0
    },
    {
      id: "m_eng66",
      question: "Correct phrase:",
      options: ["I look forward to meeting you.", "I look forward to meet you.", "I look forward meeting you.", "I look forward for meeting you."],
      correctIndex: 0
    },
    {
      id: "m_eng67",
      question: "Correct phrase:",
      options: ["We discussed the issue.", "We discussed about the issue.", "We discussed on the issue.", "We discussed regarding about the issue."],
      correctIndex: 0
    },
    {
      id: "m_eng68",
      question: "Correct phrase:",
      options: ["She apologized for being late.", "She apologized to being late.", "She apologized of being late.", "She apologized about to be late."],
      correctIndex: 0
    },
    {
      id: "m_eng69",
      question: "Correct phrase:",
      options: ["He is senior to me.", "He is senior than me.", "He is more senior than to me.", "He is senior from me."],
      correctIndex: 0
    },
    {
      id: "m_eng70",
      question: "Correct phrase:",
      options: ["She prefers tea to coffee.", "She prefers tea than coffee.", "She prefers tea from coffee.", "She prefers tea over than coffee."],
      correctIndex: 0
    },
    {
      id: "m_eng71",
      question: "Correct phrase:",
      options: ["He is good at mathematics.", "He is good in mathematics.", "He is good on mathematics.", "He is good with at mathematics."],
      correctIndex: 0
    },
    {
      id: "m_eng72",
      question: "Meaning of 'break the ice':",
      options: ["Start a friendly conversation", "End a friendship", "Create a problem", "Avoid communication"],
      correctIndex: 0
    },
    {
      id: "m_eng73",
      question: "Meaning of 'call it a day':",
      options: ["Stop working for the day", "Begin a new project", "Call someone on the phone", "Work overnight"],
      correctIndex: 0
    },
    {
      id: "m_eng74",
      question: "Meaning of 'once in a blue moon':",
      options: ["Very rarely", "Every day", "At midnight", "Immediately"],
      correctIndex: 0
    },
    {
      id: "m_eng75",
      question: "Meaning of 'hit the nail on the head':",
      options: ["Describe something exactly", "Make a mistake", "Avoid an issue", "Work very slowly"],
      correctIndex: 0
    },
    {
      id: "m_eng76",
      question: "Meaning of 'spill the beans':",
      options: ["Reveal a secret", "Cook a meal", "Waste food", "Leave a place"],
      correctIndex: 0
    },
    {
      id: "m_eng77",
      question: "Choose the most formal word for 'help':",
      options: ["Assist", "Hang out", "Fix up", "Look after"],
      correctIndex: 0
    },
    {
      id: "m_eng78",
      question: "Choose the best word: The evidence was ___ enough to support the claim.",
      options: ["sufficient", "sufficiency", "suffice", "sufficiently"],
      correctIndex: 0
    },
    {
      id: "m_eng79",
      question: "Choose the correct sentence:",
      options: ["Neither the manager nor the employees were available.", "Neither the manager nor the employees was available.", "Neither the manager nor the employees is available.", "Neither the manager nor the employees has available."],
      correctIndex: 0
    },
    {
      id: "m_eng80",
      question: "Choose the correct sentence:",
      options: ["Each of the students has a notebook.", "Each of the students have a notebook.", "Each of the students are having a notebook.", "Each of the students were a notebook."],
      correctIndex: 0
    }
  ],
  "Aptitude": [
    {
      id: "m_math1",
      question: "A number increases from 240 to 300. Percentage increase?",
      options: ["25%", "20%", "30%", "15%"],
      correctIndex: 0
    },
    {
      id: "m_math2",
      question: "A number decreases from 500 to 425. Percentage decrease?",
      options: ["15%", "10%", "12.5%", "20%"],
      correctIndex: 0
    },
    {
      id: "m_math3",
      question: "An article marked ₹2,400 gets a 12.5% discount. Selling price?",
      options: ["₹2,100", "₹2,050", "₹2,150", "₹2,200"],
      correctIndex: 0
    },
    {
      id: "m_math4",
      question: "An article bought for ₹1,250 is sold for ₹1,500. Profit percentage?",
      options: ["20%", "15%", "25%", "30%"],
      correctIndex: 0
    },
    {
      id: "m_math5",
      question: "An article sold for ₹765 gives a 15% loss. Cost price?",
      options: ["₹900", "₹850", "₹875", "₹950"],
      correctIndex: 0
    },
    {
      id: "m_math6",
      question: "If 35% of x is 140, x equals:",
      options: ["400", "350", "450", "500"],
      correctIndex: 0
    },
    {
      id: "m_math7",
      question: "If 3x+5=32, x equals:",
      options: ["9", "8", "10", "7"],
      correctIndex: 0
    },
    {
      id: "m_math8",
      question: "If 5x−12=38, x equals:",
      options: ["10", "8", "12", "14"],
      correctIndex: 0
    },
    {
      id: "m_math9",
      question: "If x/6=11, x equals:",
      options: ["66", "60", "72", "77"],
      correctIndex: 0
    },
    {
      id: "m_math10",
      question: "If 2x+3y=24 and x=6, y equals:",
      options: ["4", "3", "5", "6"],
      correctIndex: 0
    },
    {
      id: "m_math11",
      question: "The ratio 18:30 in simplest form is:",
      options: ["3:5", "2:5", "5:3", "6:10"],
      correctIndex: 0
    },
    {
      id: "m_math12",
      question: "If a:b=7:9 and a=35, b equals:",
      options: ["45", "40", "49", "54"],
      correctIndex: 0
    },
    {
      id: "m_math13",
      question: "If a:b=4:7 and b:c=14:15, a:c equals:",
      options: ["8:15", "4:15", "8:21", "14:15"],
      correctIndex: 0
    },
    {
      id: "m_math14",
      question: "Average of 14, 18, 22, 26, 30 is:",
      options: ["22", "20", "21", "24"],
      correctIndex: 0
    },
    {
      id: "m_math15",
      question: "Average of 7 numbers is 18. Their sum is:",
      options: ["126", "108", "119", "144"],
      correctIndex: 0
    },
    {
      id: "m_math16",
      question: "Average of 5 numbers is 24. Four are 18,20,25,27. Fifth is:",
      options: ["30", "28", "32", "26"],
      correctIndex: 0
    },
    {
      id: "m_math17",
      question: "A car covers 270 km in 4.5 hours. Speed?",
      options: ["60 km/h", "55 km/h", "65 km/h", "70 km/h"],
      correctIndex: 0
    },
    {
      id: "m_math18",
      question: "A 180 m train passes a pole in 9 s. Speed?",
      options: ["20 m/s", "18 m/s", "22 m/s", "24 m/s"],
      correctIndex: 0
    },
    {
      id: "m_math19",
      question: "90 km/h equals:",
      options: ["25 m/s", "20 m/s", "30 m/s", "18 m/s"],
      correctIndex: 0
    },
    {
      id: "m_math20",
      question: "A person travels 120 km at 40 km/h. Time?",
      options: ["3 h", "2 h", "4 h", "5 h"],
      correctIndex: 0
    },
    {
      id: "m_math21",
      question: "A can do a job in 15 days, B in 10 days. Together?",
      options: ["6 days", "5 days", "7 days", "8 days"],
      correctIndex: 0
    },
    {
      id: "m_math22",
      question: "A can do a job in 20 days, B in 30 days. Together?",
      options: ["12 days", "10 days", "15 days", "18 days"],
      correctIndex: 0
    },
    {
      id: "m_math23",
      question: "Three workers complete a job in 24 days. Six workers take:",
      options: ["12 days", "8 days", "16 days", "18 days"],
      correctIndex: 0
    },
    {
      id: "m_math24",
      question: "A pipe fills a tank in 12 h. In 3 h it fills:",
      options: ["1/4", "1/3", "1/6", "1/2"],
      correctIndex: 0
    },
    {
      id: "m_math25",
      question: "Two pipes fill a tank in 12 h and 18 h. Together time?",
      options: ["7.2 h", "6 h", "8 h", "9 h"],
      correctIndex: 0
    },
    {
      id: "m_math26",
      question: "SI on ₹6,000 at 9% for 2 years?",
      options: ["₹1,080", "₹900", "₹1,200", "₹1,180"],
      correctIndex: 0
    },
    {
      id: "m_math27",
      question: "SI on ₹7,500 at 8% for 3 years?",
      options: ["₹1,800", "₹1,500", "₹2,000", "₹1,200"],
      correctIndex: 0
    },
    {
      id: "m_math28",
      question: "Amount on ₹5,000 at 10% compound annually for 2 years?",
      options: ["₹6,050", "₹6,000", "₹6,100", "₹6,250"],
      correctIndex: 0
    },
    {
      id: "m_math29",
      question: "CI on ₹4,000 at 5% annually for 2 years?",
      options: ["₹410", "₹400", "₹420", "₹450"],
      correctIndex: 0
    },
    {
      id: "m_math30",
      question: "A sum doubles in 8 years at simple interest. Rate per year?",
      options: ["12.5%", "10%", "15%", "8%"],
      correctIndex: 0
    },
    {
      id: "m_math31",
      question: "HCF of 72 and 108?",
      options: ["36", "18", "24", "12"],
      correctIndex: 0
    },
    {
      id: "m_math32",
      question: "LCM of 16 and 24?",
      options: ["48", "32", "64", "96"],
      correctIndex: 0
    },
    {
      id: "m_math33",
      question: "LCM of 18, 24 and 30?",
      options: ["360", "180", "240", "720"],
      correctIndex: 0
    },
    {
      id: "m_math34",
      question: "Remainder when 839 is divided by 11?",
      options: ["3", "4", "5", "6"],
      correctIndex: 0
    },
    {
      id: "m_math35",
      question: "Smallest number divisible by 9, 12 and 15?",
      options: ["180", "90", "120", "360"],
      correctIndex: 0
    },
    {
      id: "m_math36",
      question: "Next term: 3, 8, 15, 24, 35, ?",
      options: ["48", "46", "49", "50"],
      correctIndex: 0
    },
    {
      id: "m_math37",
      question: "Next term: 2, 6, 18, 54, ?",
      options: ["162", "108", "144", "216"],
      correctIndex: 0
    },
    {
      id: "m_math38",
      question: "Next term: 1, 4, 9, 16, 25, ?",
      options: ["36", "30", "42", "49"],
      correctIndex: 0
    },
    {
      id: "m_math39",
      question: "Next term: 5, 11, 23, 47, ?",
      options: ["95", "94", "96", "99"],
      correctIndex: 0
    },
    {
      id: "m_math40",
      question: "Rectangle length 18 cm, width 12 cm. Area?",
      options: ["216 cm²", "180 cm²", "240 cm²", "360 cm²"],
      correctIndex: 0
    },
    {
      id: "m_math41",
      question: "Rectangle perimeter 70 cm, length 20 cm. Width?",
      options: ["15 cm", "10 cm", "12 cm", "20 cm"],
      correctIndex: 0
    },
    {
      id: "m_math42",
      question: "Circle radius 7 cm, π=22/7. Area?",
      options: ["154 cm²", "44 cm²", "308 cm²", "49 cm²"],
      correctIndex: 0
    },
    {
      id: "m_math43",
      question: "Triangle base 16 cm, height 10 cm. Area?",
      options: ["80 cm²", "160 cm²", "60 cm²", "100 cm²"],
      correctIndex: 0
    },
    {
      id: "m_math44",
      question: "A square has perimeter 52 cm. Side?",
      options: ["13 cm", "12 cm", "14 cm", "26 cm"],
      correctIndex: 0
    },
    {
      id: "m_math45",
      question: "A cube has side 6 cm. Volume?",
      options: ["216 cm³", "36 cm³", "144 cm³", "256 cm³"],
      correctIndex: 0
    },
    {
      id: "m_math46",
      question: "A cuboid is 5×4×3 cm. Volume?",
      options: ["60 cm³", "40 cm³", "50 cm³", "80 cm³"],
      correctIndex: 0
    },
    {
      id: "m_math47",
      question: "Probability of rolling a number greater than 4 on a fair die?",
      options: ["1/3", "1/2", "1/6", "2/3"],
      correctIndex: 0
    },
    {
      id: "m_math48",
      question: "Probability of getting a head on one fair coin toss?",
      options: ["1/2", "1/4", "1", "0"],
      correctIndex: 0
    },
    {
      id: "m_math49",
      question: "Two dice are rolled. Probability of getting a sum of 7?",
      options: ["1/6", "1/12", "1/9", "1/36"],
      correctIndex: 0
    },
    {
      id: "m_math50",
      question: "Two coins are tossed. Probability of two heads?",
      options: ["1/4", "1/2", "3/4", "1/8"],
      correctIndex: 0
    },
    {
      id: "m_math51",
      question: "How many 2-digit numbers can be formed from 2,3,4,5 without repetition?",
      options: ["12", "16", "8", "10"],
      correctIndex: 0
    },
    {
      id: "m_math52",
      question: "How many ways can 5 distinct books be arranged on a shelf?",
      options: ["120", "60", "100", "24"],
      correctIndex: 0
    },
    {
      id: "m_math53",
      question: "How many diagonals does a pentagon have?",
      options: ["5", "10", "4", "6"],
      correctIndex: 0
    },
    {
      id: "m_math54",
      question: "Median of 3, 9, 12, 14, 18, 21, 25?",
      options: ["14", "12", "18", "15"],
      correctIndex: 0
    },
    {
      id: "m_math55",
      question: "Mode of 4, 6, 6, 7, 8, 6, 9?",
      options: ["6", "7", "8", "4"],
      correctIndex: 0
    },
    {
      id: "m_math56",
      question: "Range of 5, 11, 17, 2, 20?",
      options: ["18", "15", "20", "22"],
      correctIndex: 0
    },
    {
      id: "m_math57",
      question: "Mean of 8 numbers is 16. Total?",
      options: ["128", "124", "132", "144"],
      correctIndex: 0
    },
    {
      id: "m_math58",
      question: "A salary of ₹40,000 rises by 12%. New salary?",
      options: ["₹44,800", "₹45,000", "₹43,200", "₹46,000"],
      correctIndex: 0
    },
    {
      id: "m_math59",
      question: "A price of ₹2,500 is reduced by 18%. New price?",
      options: ["₹2,050", "₹2,000", "₹2,100", "₹2,150"],
      correctIndex: 0
    },
    {
      id: "m_math60",
      question: "A population of 50,000 increases by 8%. New population?",
      options: ["54,000", "53,000", "55,000", "58,000"],
      correctIndex: 0
    },
    {
      id: "m_math61",
      question: "A number is 25% more than 160. Number?",
      options: ["200", "190", "210", "180"],
      correctIndex: 0
    },
    {
      id: "m_math62",
      question: "A number is 20% less than 450. Number?",
      options: ["360", "350", "370", "380"],
      correctIndex: 0
    },
    {
      id: "m_math63",
      question: "If 60% of a number is 84, 25% of it is:",
      options: ["35", "30", "42", "40"],
      correctIndex: 0
    },
    {
      id: "m_math64",
      question: "If 3/8 of a number is 45, the number is:",
      options: ["120", "100", "135", "160"],
      correctIndex: 0
    },
    {
      id: "m_math65",
      question: "If 5/6 of a number is 70, the number is:",
      options: ["84", "80", "90", "96"],
      correctIndex: 0
    },
    {
      id: "m_math66",
      question: "A:B investment ratio is 2:3. Profit ₹7,500. A gets:",
      options: ["₹3,000", "₹2,500", "₹4,500", "₹5,000"],
      correctIndex: 0
    },
    {
      id: "m_math67",
      question: "A invests ₹8,000 and B ₹12,000 for equal time. Profit ₹10,000. B gets:",
      options: ["₹6,000", "₹4,000", "₹5,000", "₹7,000"],
      correctIndex: 0
    },
    {
      id: "m_math68",
      question: "A shopkeeper marks goods 30% above cost and gives 10% discount. Profit?",
      options: ["17%", "20%", "15%", "18%"],
      correctIndex: 0
    },
    {
      id: "m_math69",
      question: "A shopkeeper marks goods 40% above cost and gives 20% discount. Profit?",
      options: ["12%", "16%", "20%", "8%"],
      correctIndex: 0
    },
    {
      id: "m_math70",
      question: "A 15% discount on ₹1,600 equals:",
      options: ["₹240", "₹200", "₹260", "₹280"],
      correctIndex: 0
    },
    {
      id: "m_math71",
      question: "A 12% tax on ₹2,500 equals:",
      options: ["₹300", "₹250", "₹275", "₹325"],
      correctIndex: 0
    },
    {
      id: "m_math72",
      question: "Convert 2.5 hours to minutes.",
      options: ["150", "120", "180", "125"],
      correctIndex: 0
    },
    {
      id: "m_math73",
      question: "Convert 3.6 km to metres.",
      options: ["3600 m", "360 m", "36000 m", "3060 m"],
      correctIndex: 0
    },
    {
      id: "m_math74",
      question: "If 4x=3x+17, x equals:",
      options: ["17", "14", "16", "18"],
      correctIndex: 0
    },
    {
      id: "m_math75",
      question: "If x²−9=0 and x is positive, x equals:",
      options: ["3", "-3", "9", "6"],
      correctIndex: 0
    },
    {
      id: "m_math76",
      question: "Simplify 3/5 + 1/10.",
      options: ["7/10", "4/15", "2/5", "3/10"],
      correctIndex: 0
    },
    {
      id: "m_math77",
      question: "Simplify 5/6 − 1/3.",
      options: ["1/2", "2/3", "1/3", "5/9"],
      correctIndex: 0
    },
    {
      id: "m_math78",
      question: "Simplify 2/3 × 9/4.",
      options: ["3/2", "2", "4/3", "3"],
      correctIndex: 0
    },
    {
      id: "m_math79",
      question: "Simplify 3/4 ÷ 9/8.",
      options: ["2/3", "3/2", "1/2", "4/3"],
      correctIndex: 0
    },
    {
      id: "m_math80",
      question: "If 0.4x=24, x equals:",
      options: ["60", "48", "72", "80"],
      correctIndex: 0
    }
  ],
  "Logical Reasoning": [
    {
      id: "m_logic1",
      question: "Next: 4,9,16,25,36,?",
      options: ["49", "45", "48", "52"],
      correctIndex: 0
    },
    {
      id: "m_logic2",
      question: "Next: 2,7,14,23,34,?",
      options: ["47", "45", "48", "49"],
      correctIndex: 0
    },
    {
      id: "m_logic3",
      question: "Next: 100,81,64,49,?",
      options: ["36", "32", "40", "25"],
      correctIndex: 0
    },
    {
      id: "m_logic4",
      question: "Next: 3,9,27,81,?",
      options: ["243", "162", "324", "729"],
      correctIndex: 0
    },
    {
      id: "m_logic5",
      question: "Next: 1,3,6,10,15,?",
      options: ["21", "20", "22", "24"],
      correctIndex: 0
    },
    {
      id: "m_logic6",
      question: "Next: 5,10,20,40,?",
      options: ["80", "60", "70", "100"],
      correctIndex: 0
    },
    {
      id: "m_logic7",
      question: "Next: 2,5,11,23,47,?",
      options: ["95", "94", "96", "97"],
      correctIndex: 0
    },
    {
      id: "m_logic8",
      question: "Next: 7,14,28,56,?",
      options: ["112", "98", "84", "120"],
      correctIndex: 0
    },
    {
      id: "m_logic9",
      question: "Next letter: A,C,F,J,O,?",
      options: ["U", "T", "V", "W"],
      correctIndex: 0
    },
    {
      id: "m_logic10",
      question: "Next letter: B,E,I,N,T,?",
      options: ["A", "Z", "Y", "B"],
      correctIndex: 0
    },
    {
      id: "m_logic11",
      question: "Next pair: AZ,BY,CX,DW,?",
      options: ["EV", "FU", "EW", "FV"],
      correctIndex: 0
    },
    {
      id: "m_logic12",
      question: "Next pair: AB,DE,GH,JK,?",
      options: ["MN", "LM", "NO", "OP"],
      correctIndex: 0
    },
    {
      id: "m_logic13",
      question: "If CAT→DBU, DOG→?",
      options: ["EPH", "DPH", "EOG", "FQI"],
      correctIndex: 0
    },
    {
      id: "m_logic14",
      question: "If PEN→QFO, MAP→?",
      options: ["NBQ", "MBQ", "NBO", "OBQ"],
      correctIndex: 0
    },
    {
      id: "m_logic15",
      question: "If each letter moves two forward, ABC→?",
      options: ["CDE", "BCD", "DEF", "BCE"],
      correctIndex: 0
    },
    {
      id: "m_logic16",
      question: "If each letter moves one backward, DOG→?",
      options: ["CNF", "COG", "DNE", "BMF"],
      correctIndex: 0
    },
    {
      id: "m_logic17",
      question: "Odd one out:",
      options: ["8", "27", "64", "100"],
      correctIndex: 3
    },
    {
      id: "m_logic18",
      question: "Odd one out:",
      options: ["16", "25", "36", "50"],
      correctIndex: 3
    },
    {
      id: "m_logic19",
      question: "Odd one out:",
      options: ["Mercury", "Venus", "Earth", "Moon"],
      correctIndex: 3
    },
    {
      id: "m_logic20",
      question: "Odd one out:",
      options: ["Copper", "Iron", "Silver", "Plastic"],
      correctIndex: 3
    },
    {
      id: "m_logic21",
      question: "Book:Author :: Painting:?",
      options: ["Artist", "Reader", "Frame", "Museum"],
      correctIndex: 0
    },
    {
      id: "m_logic22",
      question: "Bird:Nest :: Bee:?",
      options: ["Hive", "Web", "Den", "Burrow"],
      correctIndex: 0
    },
    {
      id: "m_logic23",
      question: "Doctor:Hospital :: Teacher:?",
      options: ["School", "Court", "Bank", "Factory"],
      correctIndex: 0
    },
    {
      id: "m_logic24",
      question: "Seed:Plant :: Egg:?",
      options: ["Bird", "Nest", "Shell", "Feather"],
      correctIndex: 0
    },
    {
      id: "m_logic25",
      question: "A is taller than B; B taller than C. Shortest?",
      options: ["C", "A", "B", "Cannot determine"],
      correctIndex: 0
    },
    {
      id: "m_logic26",
      question: "P older than Q; Q older than R; S older than P. Youngest?",
      options: ["R", "Q", "P", "S"],
      correctIndex: 0
    },
    {
      id: "m_logic27",
      question: "A is left of B; C is right of B. Middle?",
      options: ["B", "A", "C", "Cannot determine"],
      correctIndex: 0
    },
    {
      id: "m_logic28",
      question: "P north of Q; R south of Q. Farthest south?",
      options: ["R", "P", "Q", "Cannot determine"],
      correctIndex: 0
    },
    {
      id: "m_logic29",
      question: "Facing north, turn right twice. Direction?",
      options: ["South", "East", "West", "North"],
      correctIndex: 0
    },
    {
      id: "m_logic30",
      question: "Facing west, turn left. Direction?",
      options: ["South", "North", "East", "West"],
      correctIndex: 0
    },
    {
      id: "m_logic31",
      question: "Facing south, turn right. Direction?",
      options: ["West", "East", "North", "South"],
      correctIndex: 0
    },
    {
      id: "m_logic32",
      question: "Facing east, turn 270° clockwise. Direction?",
      options: ["North", "South", "West", "East"],
      correctIndex: 0
    },
    {
      id: "m_logic33",
      question: "A is sister of B; B father of C. A is C's:",
      options: ["Aunt", "Mother", "Sister", "Grandmother"],
      correctIndex: 0
    },
    {
      id: "m_logic34",
      question: "X is son of Y; Y sister of Z. X is Z's:",
      options: ["Nephew", "Cousin", "Brother", "Uncle"],
      correctIndex: 0
    },
    {
      id: "m_logic35",
      question: "M mother of N; N brother of P. M is P's:",
      options: ["Mother", "Aunt", "Sister", "Grandmother"],
      correctIndex: 0
    },
    {
      id: "m_logic36",
      question: "A immediately before B; B immediately before C. Order?",
      options: ["ABC", "ACB", "BAC", "CBA"],
      correctIndex: 0
    },
    {
      id: "m_logic37",
      question: "In a race A before B, B before C, D after C. First?",
      options: ["A", "B", "C", "D"],
      correctIndex: 0
    },
    {
      id: "m_logic38",
      question: "In a queue R before S, S before T, T before U. Last?",
      options: ["U", "T", "S", "R"],
      correctIndex: 0
    },
    {
      id: "m_logic39",
      question: "A,B,C,D,E: D before A before B before C before E. First?",
      options: ["D", "A", "B", "C"],
      correctIndex: 0
    },
    {
      id: "m_logic40",
      question: "All cats are animals. Definitely true?",
      options: ["All cats are animals", "All cats are black", "Some cats are black", "No cats are animals"],
      correctIndex: 0
    },
    {
      id: "m_logic41",
      question: "All engineers are graduates. Definitely true?",
      options: ["All engineers are graduates", "All engineers are artists", "Some engineers are artists", "No engineers are graduates"],
      correctIndex: 0
    },
    {
      id: "m_logic42",
      question: "No birds are mammals; all sparrows are birds. Therefore:",
      options: ["No sparrows are mammals", "All mammals are sparrows", "Some sparrows are mammals", "All birds are sparrows"],
      correctIndex: 0
    },
    {
      id: "m_logic43",
      question: "All X are Y; no Y are Z. Therefore:",
      options: ["No X are Z", "All X are Z", "Some X are Z", "All Z are X"],
      correctIndex: 0
    },
    {
      id: "m_logic44",
      question: "Some A are B; all B are C. Therefore:",
      options: ["Some A are C", "All A are C", "No A are C", "Some C are not B"],
      correctIndex: 0
    },
    {
      id: "m_logic45",
      question: "If P→Q and P is true, then:",
      options: ["Q is true", "Q is false", "P is false", "Nothing"],
      correctIndex: 0
    },
    {
      id: "m_logic46",
      question: "If P→Q and Q is false, then:",
      options: ["P is false", "P is true", "Q is true", "Nothing"],
      correctIndex: 0
    },
    {
      id: "m_logic47",
      question: "If P→Q and Q→R, then:",
      options: ["P→R", "R→P", "Q→P", "P→not R"],
      correctIndex: 0
    },
    {
      id: "m_logic48",
      question: "Using A=1,...Z=26, BAD equals:",
      options: ["7", "6", "5", "8"],
      correctIndex: 0
    },
    {
      id: "m_logic49",
      question: "Using A=1,...Z=26, CAT equals:",
      options: ["24", "23", "22", "25"],
      correctIndex: 0
    },
    {
      id: "m_logic50",
      question: "Using A=1,...Z=26, CODE equals:",
      options: ["27", "29", "31", "33"],
      correctIndex: 0
    },
    {
      id: "m_logic51",
      question: "Using A=1,...Z=26, LOGIC equals:",
      options: ["47", "45", "49", "51"],
      correctIndex: 0
    },
    {
      id: "m_logic52",
      question: "Which pair matches 5:25?",
      options: ["4:16", "4:20", "6:30", "7:35"],
      correctIndex: 0
    },
    {
      id: "m_logic53",
      question: "Which pair matches 3:27?",
      options: ["4:64", "2:6", "4:16", "5:25"],
      correctIndex: 0
    },
    {
      id: "m_logic54",
      question: "Alphabetically arranging MARKET, third letter is:",
      options: ["K", "A", "M", "E"],
      correctIndex: 0
    },
    {
      id: "m_logic55",
      question: "Alphabetically arranging SCHOOL, fourth letter is:",
      options: ["O", "L", "S", "C"],
      correctIndex: 0
    },
    {
      id: "m_logic56",
      question: "Reverse SCHOOL. Fourth letter from left?",
      options: ["O", "H", "C", "S"],
      correctIndex: 0
    },
    {
      id: "m_logic57",
      question: "Reverse TRAIN. Third letter from left?",
      options: ["A", "R", "T", "N"],
      correctIndex: 0
    },
    {
      id: "m_logic58",
      question: "A clock shows 3:00. Angle?",
      options: ["90°", "60°", "120°", "180°"],
      correctIndex: 0
    },
    {
      id: "m_logic59",
      question: "A clock shows 6:00. Angle?",
      options: ["180°", "90°", "120°", "270°"],
      correctIndex: 0
    },
    {
      id: "m_logic60",
      question: "A clock shows 9:00. Angle?",
      options: ["90°", "180°", "270°", "45°"],
      correctIndex: 0
    },
    {
      id: "m_logic61",
      question: "If today is Tuesday, 10 days later is:",
      options: ["Friday", "Thursday", "Saturday", "Sunday"],
      correctIndex: 0
    },
    {
      id: "m_logic62",
      question: "If today is Sunday, 15 days later is:",
      options: ["Monday", "Tuesday", "Sunday", "Saturday"],
      correctIndex: 0
    },
    {
      id: "m_logic63",
      question: "If today is Friday, 20 days later is:",
      options: ["Thursday", "Wednesday", "Friday", "Saturday"],
      correctIndex: 0
    },
    {
      id: "m_logic64",
      question: "If January 1 is Monday, January 15 is:",
      options: ["Monday", "Sunday", "Tuesday", "Wednesday"],
      correctIndex: 0
    },
    {
      id: "m_logic65",
      question: "If January 1 is Monday, January 31 is:",
      options: ["Wednesday", "Tuesday", "Thursday", "Friday"],
      correctIndex: 0
    },
    {
      id: "m_logic66",
      question: "A walks 3 km north and 4 km east. Distance from start?",
      options: ["5 km", "7 km", "4 km", "3 km"],
      correctIndex: 0
    },
    {
      id: "m_logic67",
      question: "A walks 5 km south and 12 km east. Distance?",
      options: ["13 km", "17 km", "12 km", "10 km"],
      correctIndex: 0
    },
    {
      id: "m_logic68",
      question: "A walks 8 km west and 6 km north. Distance?",
      options: ["10 km", "14 km", "8 km", "6 km"],
      correctIndex: 0
    },
    {
      id: "m_logic69",
      question: "If 3 pencils cost ₹45, 8 cost:",
      options: ["₹120", "₹105", "₹135", "₹90"],
      correctIndex: 0
    },
    {
      id: "m_logic70",
      question: "4 workers make 80 items in 5 h. One worker per hour?",
      options: ["4", "2", "5", "8"],
      correctIndex: 0
    },
    {
      id: "m_logic71",
      question: "If 3→12, 4→20, 5→30, then 6→?",
      options: ["42", "36", "40", "48"],
      correctIndex: 0
    },
    {
      id: "m_logic72",
      question: "If 2→8, 3→27, 4→64, then 5→?",
      options: ["125", "100", "150", "625"],
      correctIndex: 0
    },
    {
      id: "m_logic73",
      question: "Next: 6,12,24,48,?",
      options: ["96", "72", "84", "108"],
      correctIndex: 0
    },
    {
      id: "m_logic74",
      question: "Next: 1,2,6,24,120,?",
      options: ["720", "240", "360", "600"],
      correctIndex: 0
    },
    {
      id: "m_logic75",
      question: "Next: 10,13,19,28,40,?",
      options: ["55", "52", "53", "57"],
      correctIndex: 0
    },
    {
      id: "m_logic76",
      question: "Next: 3,7,15,31,?",
      options: ["63", "47", "55", "65"],
      correctIndex: 0
    },
    {
      id: "m_logic77",
      question: "Some students are athletes; all athletes train daily. Therefore:",
      options: ["Some students train daily", "All students train daily", "No students train daily", "Some athletes are not students"],
      correctIndex: 0
    },
    {
      id: "m_logic78",
      question: "Next: 2,4,8,16,32,?",
      options: ["64", "48", "56", "72"],
      correctIndex: 0
    },
    {
      id: "m_logic79",
      question: "Next: 6,11,21,41,81,?",
      options: ["161", "160", "162", "121"],
      correctIndex: 0
    },
    {
      id: "m_logic80",
      question: "If all musicians are artists and some artists are teachers, which is definitely true?",
      options: ["All musicians are artists", "Some musicians are teachers", "All teachers are musicians", "No musicians are artists"],
      correctIndex: 0
    }
  ],
  "General Awareness": [
    {
      id: "m_aw1",
      question: "Which Indian constitutional article guarantees equality before law?",
      options: ["Article 14", "Article 19", "Article 21", "Article 25"],
      correctIndex: 0
    },
    {
      id: "m_aw2",
      question: "Which article protects life and personal liberty?",
      options: ["Article 21", "Article 14", "Article 19", "Article 32"],
      correctIndex: 0
    },
    {
      id: "m_aw3",
      question: "Which body conducts elections to Parliament and state legislatures?",
      options: ["Election Commission of India", "UPSC", "CAG", "Finance Commission"],
      correctIndex: 0
    },
    {
      id: "m_aw4",
      question: "Who is the ex-officio Chairman of the Rajya Sabha?",
      options: ["Vice-President", "President", "Prime Minister", "Speaker"],
      correctIndex: 0
    },
    {
      id: "m_aw5",
      question: "Who presides over the Lok Sabha?",
      options: ["Speaker", "President", "Vice-President", "Prime Minister"],
      correctIndex: 0
    },
    {
      id: "m_aw6",
      question: "The 73rd Constitutional Amendment is associated with:",
      options: ["Panchayati Raj", "Urban local bodies", "Fundamental Duties", "Emergency provisions"],
      correctIndex: 0
    },
    {
      id: "m_aw7",
      question: "The 74th Constitutional Amendment is associated with:",
      options: ["Urban local bodies", "Panchayati Raj", "Fundamental Rights", "Election rules"],
      correctIndex: 0
    },
    {
      id: "m_aw8",
      question: "Which amendment reduced India's voting age from 21 to 18?",
      options: ["61st Amendment", "42nd Amendment", "44th Amendment", "73rd Amendment"],
      correctIndex: 0
    },
    {
      id: "m_aw9",
      question: "The Quit India Movement began in:",
      options: ["1942", "1930", "1920", "1947"],
      correctIndex: 0
    },
    {
      id: "m_aw10",
      question: "The Dandi March was associated with:",
      options: ["Salt Satyagraha", "Quit India Movement", "Non-Cooperation", "Home Rule"],
      correctIndex: 0
    },
    {
      id: "m_aw11",
      question: "The Jallianwala Bagh massacre occurred in:",
      options: ["1919", "1920", "1930", "1942"],
      correctIndex: 0
    },
    {
      id: "m_aw12",
      question: "Who chaired the Drafting Committee of the Indian Constitution?",
      options: ["B. R. Ambedkar", "Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"],
      correctIndex: 0
    },
    {
      id: "m_aw13",
      question: "Where was the first session of the Indian National Congress held in 1885?",
      options: ["Bombay", "Calcutta", "Madras", "Delhi"],
      correctIndex: 0
    },
    {
      id: "m_aw14",
      question: "Which Harappan site is famous for its dockyard?",
      options: ["Lothal", "Harappa", "Mohenjo-daro", "Kalibangan"],
      correctIndex: 0
    },
    {
      id: "m_aw15",
      question: "Which civilization is associated with Harappa and Mohenjo-daro?",
      options: ["Indus Valley Civilization", "Roman Civilization", "Greek Civilization", "Mayan Civilization"],
      correctIndex: 0
    },
    {
      id: "m_aw16",
      question: "Which organelle produces most ATP in aerobic cells?",
      options: ["Mitochondrion", "Ribosome", "Golgi apparatus", "Lysosome"],
      correctIndex: 0
    },
    {
      id: "m_aw17",
      question: "Where is most genetic material stored in a typical eukaryotic cell?",
      options: ["Nucleus", "Ribosome", "Golgi apparatus", "Vacuole"],
      correctIndex: 0
    },
    {
      id: "m_aw18",
      question: "Which molecule carries hereditary information in most organisms?",
      options: ["DNA", "ATP", "Glucose", "Hemoglobin"],
      correctIndex: 0
    },
    {
      id: "m_aw19",
      question: "Which blood component is mainly involved in clotting?",
      options: ["Platelets", "Red blood cells", "White blood cells", "Plasma"],
      correctIndex: 0
    },
    {
      id: "m_aw20",
      question: "Which hormone lowers blood glucose?",
      options: ["Insulin", "Glucagon", "Adrenaline", "Thyroxine"],
      correctIndex: 0
    },
    {
      id: "m_aw21",
      question: "Which hormone raises blood glucose during fasting?",
      options: ["Glucagon", "Insulin", "Melatonin", "Calcitonin"],
      correctIndex: 0
    },
    {
      id: "m_aw22",
      question: "Which organ produces bile?",
      options: ["Liver", "Pancreas", "Kidney", "Stomach"],
      correctIndex: 0
    },
    {
      id: "m_aw23",
      question: "Which organ stores bile?",
      options: ["Gallbladder", "Liver", "Pancreas", "Spleen"],
      correctIndex: 0
    },
    {
      id: "m_aw24",
      question: "Which organ filters blood to form urine?",
      options: ["Kidney", "Liver", "Lung", "Heart"],
      correctIndex: 0
    },
    {
      id: "m_aw25",
      question: "Which brain region helps coordinate balance and movement?",
      options: ["Cerebellum", "Medulla", "Hypothalamus", "Spinal cord"],
      correctIndex: 0
    },
    {
      id: "m_aw26",
      question: "Which gas is required for aerobic respiration?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
      correctIndex: 0
    },
    {
      id: "m_aw27",
      question: "Which process lets green plants make food using light?",
      options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
      correctIndex: 0
    },
    {
      id: "m_aw28",
      question: "Which gas is consumed during photosynthesis?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correctIndex: 0
    },
    {
      id: "m_aw29",
      question: "Which law relates voltage, current and resistance?",
      options: ["Ohm's law", "Boyle's law", "Charles's law", "Newton's law"],
      correctIndex: 0
    },
    {
      id: "m_aw30",
      question: "SI unit of electric current:",
      options: ["Ampere", "Volt", "Ohm", "Watt"],
      correctIndex: 0
    },
    {
      id: "m_aw31",
      question: "SI unit of electric power:",
      options: ["Watt", "Joule", "Coulomb", "Ohm"],
      correctIndex: 0
    },
    {
      id: "m_aw32",
      question: "SI unit of electric charge:",
      options: ["Coulomb", "Volt", "Ampere", "Watt"],
      correctIndex: 0
    },
    {
      id: "m_aw33",
      question: "Which radiation has the highest frequency among these?",
      options: ["Gamma rays", "Radio waves", "Microwaves", "Infrared"],
      correctIndex: 0
    },
    {
      id: "m_aw34",
      question: "Which lens corrects myopia?",
      options: ["Concave lens", "Convex lens", "Plane lens", "Prism"],
      correctIndex: 0
    },
    {
      id: "m_aw35",
      question: "Which lens corrects hypermetropia?",
      options: ["Convex lens", "Concave lens", "Plane lens", "Prism"],
      correctIndex: 0
    },
    {
      id: "m_aw36",
      question: "Which planet has the shortest orbital period?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctIndex: 0
    },
    {
      id: "m_aw37",
      question: "Which planet has the Great Red Spot?",
      options: ["Jupiter", "Saturn", "Mars", "Neptune"],
      correctIndex: 0
    },
    {
      id: "m_aw38",
      question: "Which planet is famous for its extensive ring system?",
      options: ["Saturn", "Mars", "Venus", "Mercury"],
      correctIndex: 0
    },
    {
      id: "m_aw39",
      question: "Which planet rotates retrograde relative to most planets?",
      options: ["Venus", "Mars", "Jupiter", "Neptune"],
      correctIndex: 0
    },
    {
      id: "m_aw40",
      question: "Which Earth layer is primarily liquid iron and nickel?",
      options: ["Outer core", "Inner core", "Mantle", "Crust"],
      correctIndex: 0
    },
    {
      id: "m_aw41",
      question: "Plates moving apart form a:",
      options: ["Divergent boundary", "Convergent boundary", "Transform boundary", "Stationary boundary"],
      correctIndex: 0
    },
    {
      id: "m_aw42",
      question: "Plates sliding past one another form a:",
      options: ["Transform boundary", "Divergent boundary", "Convergent boundary", "Subduction boundary"],
      correctIndex: 0
    },
    {
      id: "m_aw43",
      question: "Which instrument measures atmospheric pressure?",
      options: ["Barometer", "Hygrometer", "Anemometer", "Thermometer"],
      correctIndex: 0
    },
    {
      id: "m_aw44",
      question: "Which instrument measures humidity?",
      options: ["Hygrometer", "Barometer", "Anemometer", "Seismograph"],
      correctIndex: 0
    },
    {
      id: "m_aw45",
      question: "Which instrument measures wind speed?",
      options: ["Anemometer", "Barometer", "Hygrometer", "Seismograph"],
      correctIndex: 0
    },
    {
      id: "m_aw46",
      question: "Which scale measures mineral hardness?",
      options: ["Mohs scale", "Richter scale", "Beaufort scale", "Fujita scale"],
      correctIndex: 0
    },
    {
      id: "m_aw47",
      question: "Which river is called the Sorrow of Bihar because of severe flooding?",
      options: ["Kosi", "Narmada", "Godavari", "Tapi"],
      correctIndex: 0
    },
    {
      id: "m_aw48",
      question: "Which major Indian river flows west into the Arabian Sea?",
      options: ["Narmada", "Ganga", "Yamuna", "Kosi"],
      correctIndex: 0
    },
    {
      id: "m_aw49",
      question: "Black soil is especially suitable for:",
      options: ["Cotton", "Tea", "Jute", "Apple"],
      correctIndex: 0
    },
    {
      id: "m_aw50",
      question: "Which monsoon branch brings heavy rainfall to India's west coast?",
      options: ["Arabian Sea branch", "Bay of Bengal branch", "Northeast branch", "Polar branch"],
      correctIndex: 0
    },
    {
      id: "m_aw51",
      question: "Which city is known as India's Silicon Valley?",
      options: ["Bengaluru", "Mumbai", "Chennai", "Jaipur"],
      correctIndex: 0
    },
    {
      id: "m_aw52",
      question: "India's central bank is:",
      options: ["Reserve Bank of India", "SEBI", "SBI", "NITI Aayog"],
      correctIndex: 0
    },
    {
      id: "m_aw53",
      question: "Which body regulates India's securities market?",
      options: ["SEBI", "RBI", "TRAI", "IRDAI"],
      correctIndex: 0
    },
    {
      id: "m_aw54",
      question: "Which body regulates insurance in India?",
      options: ["IRDAI", "SEBI", "RBI", "TRAI"],
      correctIndex: 0
    },
    {
      id: "m_aw55",
      question: "Which body regulates telecommunications in India?",
      options: ["TRAI", "SEBI", "RBI", "FSSAI"],
      correctIndex: 0
    },
    {
      id: "m_aw56",
      question: "GDP broadly measures:",
      options: ["Value of final goods and services produced within an economy", "Total population", "Government debt only", "Exports only"],
      correctIndex: 0
    },
    {
      id: "m_aw57",
      question: "Inflation generally means:",
      options: ["A sustained rise in the general price level", "A fall in population", "A rise in rainfall", "A fall in exports only"],
      correctIndex: 0
    },
    {
      id: "m_aw58",
      question: "Which organization is primarily responsible for global public health?",
      options: ["WHO", "WTO", "UNESCO", "UNHCR"],
      correctIndex: 0
    },
    {
      id: "m_aw59",
      question: "WHO headquarters is in:",
      options: ["Geneva", "New York", "Paris", "Rome"],
      correctIndex: 0
    },
    {
      id: "m_aw60",
      question: "UNESCO headquarters is in:",
      options: ["Paris", "Geneva", "London", "Vienna"],
      correctIndex: 0
    },
    {
      id: "m_aw61",
      question: "Which organization makes global trade rules?",
      options: ["WTO", "WHO", "UNESCO", "ILO"],
      correctIndex: 0
    },
    {
      id: "m_aw62",
      question: "Which institution focuses on monetary stability and balance-of-payments support?",
      options: ["IMF", "WHO", "UNESCO", "Interpol"],
      correctIndex: 0
    },
    {
      id: "m_aw63",
      question: "Which institution provides major development financing to developing countries?",
      options: ["World Bank", "WHO", "WTO", "UNESCO"],
      correctIndex: 0
    },
    {
      id: "m_aw64",
      question: "Which country is called the Land of the Rising Sun?",
      options: ["Japan", "China", "Thailand", "South Korea"],
      correctIndex: 0
    },
    {
      id: "m_aw65",
      question: "Which is the largest hot desert?",
      options: ["Sahara", "Gobi", "Kalahari", "Thar"],
      correctIndex: 0
    },
    {
      id: "m_aw66",
      question: "Which is the largest island in the world?",
      options: ["Greenland", "Madagascar", "Borneo", "New Guinea"],
      correctIndex: 0
    },
    {
      id: "m_aw67",
      question: "Which mountain range contains Mount Everest?",
      options: ["Himalayas", "Andes", "Alps", "Rockies"],
      correctIndex: 0
    },
    {
      id: "m_aw68",
      question: "Mount Everest lies on the border of Nepal and:",
      options: ["China", "India", "Bhutan", "Pakistan"],
      correctIndex: 0
    },
    {
      id: "m_aw69",
      question: "Which sea separates Europe and Africa?",
      options: ["Mediterranean Sea", "Arabian Sea", "Black Sea", "Red Sea"],
      correctIndex: 0
    },
    {
      id: "m_aw70",
      question: "Which canal connects the Mediterranean Sea and Red Sea?",
      options: ["Suez Canal", "Panama Canal", "Kiel Canal", "Corinth Canal"],
      correctIndex: 0
    },
    {
      id: "m_aw71",
      question: "Which canal connects the Atlantic and Pacific through Panama?",
      options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Corinth Canal"],
      correctIndex: 0
    },
    {
      id: "m_aw72",
      question: "Which country uses the yen?",
      options: ["Japan", "China", "South Korea", "Thailand"],
      correctIndex: 0
    },
    {
      id: "m_aw73",
      question: "Which country uses pound sterling?",
      options: ["United Kingdom", "Canada", "Australia", "New Zealand"],
      correctIndex: 0
    },
    {
      id: "m_aw74",
      question: "Which Indian space agency operates Chandrayaan missions?",
      options: ["ISRO", "DRDO", "BARC", "CSIR"],
      correctIndex: 0
    },
    {
      id: "m_aw75",
      question: "Aditya-L1 primarily studies:",
      options: ["The Sun", "Mars", "Earth's oceans", "Jupiter"],
      correctIndex: 0
    },
    {
      id: "m_aw76",
      question: "Chandrayaan-3 landed on:",
      options: ["The Moon", "Mars", "Venus", "An asteroid"],
      correctIndex: 0
    },
    {
      id: "m_aw77",
      question: "Which telescope primarily observes infrared wavelengths?",
      options: ["James Webb Space Telescope", "Hubble Space Telescope", "Chandra Observatory", "Kepler"],
      correctIndex: 0
    },
    {
      id: "m_aw78",
      question: "Which sport uses a pommel horse?",
      options: ["Gymnastics", "Fencing", "Rowing", "Archery"],
      correctIndex: 0
    },
    {
      id: "m_aw79",
      question: "Which sport uses the terms love, deuce and ace?",
      options: ["Tennis", "Cricket", "Hockey", "Football"],
      correctIndex: 0
    },
    {
      id: "m_aw80",
      question: "Which chess piece moves in an L shape?",
      options: ["Knight", "Bishop", "Rook", "Queen"],
      correctIndex: 0
    }
  ]
};
