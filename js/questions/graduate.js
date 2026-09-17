// Graduate Level Question Bank
// Difficulty: Graduate / Advanced
// 400 questions: 5 categories × 80 questions

window.QUESTIONS_GRADUATE = {
  "Basic Computers": [
    {
      id: "g_comp1",
      question: "Which OSI layer provides logical addressing and routing?",
      options: ["Data Link", "Network", "Transport", "Session"],
      correctIndex: 1
    },
    {
      id: "g_comp2",
      question: "Which protocol provides reliable, connection-oriented transport?",
      options: ["UDP", "IP", "TCP", "ARP"],
      correctIndex: 2
    },
    {
      id: "g_comp3",
      question: "What is the primary purpose of DNS?",
      options: ["Encrypt traffic", "Map domain names to IP addresses", "Assign MAC addresses", "Compress web pages"],
      correctIndex: 1
    },
    {
      id: "g_comp4",
      question: "Which SQL command removes a table definition and its data?",
      options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
      correctIndex: 2
    },
    {
      id: "g_comp5",
      question: "What does ACID 'I' represent?",
      options: ["Integrity", "Isolation", "Indexing", "Iteration"],
      correctIndex: 1
    },
    {
      id: "g_comp6",
      question: "Which HTTP status code means Not Found?",
      options: ["200", "301", "404", "500"],
      correctIndex: 2
    },
    {
      id: "g_comp7",
      question: "Which Git command creates a branch?",
      options: ["git branch", "git merge", "git stash", "git fetch"],
      correctIndex: 0
    },
    {
      id: "g_comp8",
      question: "What is binary search complexity on a sorted array?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 1
    },
    {
      id: "g_comp9",
      question: "Which memory is volatile?",
      options: ["SSD", "ROM", "RAM", "Flash"],
      correctIndex: 2
    },
    {
      id: "g_comp10",
      question: "What does HTTPS add to HTTP?",
      options: ["Compression", "TLS security", "A new IP layer", "Database access"],
      correctIndex: 1
    },
    {
      id: "g_comp11",
      question: "Which algorithm finds shortest paths with non-negative edge weights from one source?",
      options: ["Kruskal", "Dijkstra", "Prim", "DFS"],
      correctIndex: 1
    },
    {
      id: "g_comp12",
      question: "What property must a primary key have?",
      options: ["Nullable", "Unique and non-null", "Text only", "Auto-incremented"],
      correctIndex: 1
    },
    {
      id: "g_comp13",
      question: "Which cloud model provides virtual machines and networking?",
      options: ["SaaS", "PaaS", "IaaS", "FaaS"],
      correctIndex: 2
    },
    {
      id: "g_comp14",
      question: "Which HTTP method is generally idempotent and replaces a resource representation?",
      options: ["GET", "POST", "PUT", "CONNECT"],
      correctIndex: 2
    },
    {
      id: "g_comp15",
      question: "What does normalization primarily reduce?",
      options: ["CPU usage", "Data redundancy and anomalies", "Network hops", "Encryption cost"],
      correctIndex: 1
    },
    {
      id: "g_comp16",
      question: "Which is a private IPv4 address?",
      options: ["8.8.8.8", "192.168.10.25", "1.1.1.1", "172.40.1.1"],
      correctIndex: 1
    },
    {
      id: "g_comp17",
      question: "Which CPU component performs arithmetic and logical operations?",
      options: ["ALU", "NIC", "MMU", "BIOS"],
      correctIndex: 0
    },
    {
      id: "g_comp18",
      question: "What is virtualization?",
      options: ["Deleting files", "Running virtual environments on physical resources", "Encrypting disks", "Replacing RAM"],
      correctIndex: 1
    },
    {
      id: "g_comp19",
      question: "Which Linux command prints the current directory?",
      options: ["ls", "pwd", "cd", "whoami"],
      correctIndex: 1
    },
    {
      id: "g_comp20",
      question: "Which Linux permission means execute?",
      options: ["r", "w", "x", "s"],
      correctIndex: 2
    },
    {
      id: "g_comp21",
      question: "What does a foreign key enforce?",
      options: ["Referential integrity", "CPU scheduling", "Compression", "Password hashing"],
      correctIndex: 0
    },
    {
      id: "g_comp22",
      question: "Which cache is generally closest to the CPU core?",
      options: ["L3", "RAM", "L1", "SSD"],
      correctIndex: 2
    },
    {
      id: "g_comp23",
      question: "Which protocol securely transfers files over SSH?",
      options: ["SFTP", "FTP", "TFTP", "SMTP"],
      correctIndex: 0
    },
    {
      id: "g_comp24",
      question: "What is polymorphism in OOP?",
      options: ["One interface with multiple forms", "Hiding all variables", "One object only", "Deleting inheritance"],
      correctIndex: 0
    },
    {
      id: "g_comp25",
      question: "Which HTTP status commonly indicates successful resource creation?",
      options: ["200", "201", "204", "304"],
      correctIndex: 1
    },
    {
      id: "g_comp26",
      question: "What is the purpose of a load balancer?",
      options: ["Distribute traffic among servers", "Store passwords", "Compile code", "Replace DNS"],
      correctIndex: 0
    },
    {
      id: "g_comp27",
      question: "Which structure is commonly used for database indexes?",
      options: ["B-tree", "Stack", "Queue", "Graph only"],
      correctIndex: 0
    },
    {
      id: "g_comp28",
      question: "What is a race condition?",
      options: ["Timing-dependent concurrent bug", "Syntax error", "Cable fault", "Compiler warning"],
      correctIndex: 0
    },
    {
      id: "g_comp29",
      question: "Which primitive is designed for one-way hashing?",
      options: ["AES", "RSA", "SHA-256", "Diffie-Hellman"],
      correctIndex: 2
    },
    {
      id: "g_comp30",
      question: "What is containerization used for?",
      options: ["Packaging applications with dependencies", "Increasing screen resolution", "Replacing databases", "Generating IPs"],
      correctIndex: 0
    },
    {
      id: "g_comp31",
      question: "Which scheduler rotates processes through time slices?",
      options: ["FCFS", "Round Robin", "SJF", "LIFO"],
      correctIndex: 1
    },
    {
      id: "g_comp32",
      question: "What is deadlock?",
      options: ["Processes wait indefinitely for one another's resources", "A cache miss", "A DNS failure", "A completed process"],
      correctIndex: 0
    },
    {
      id: "g_comp33",
      question: "Which HTTP header commonly carries a bearer token?",
      options: ["Authorization", "Location", "ETag", "Host"],
      correctIndex: 0
    },
    {
      id: "g_comp34",
      question: "What is a CDN designed to do?",
      options: ["Serve content from distributed edge locations", "Compile Java", "Manage SQL schemas", "Replace CPUs"],
      correctIndex: 0
    },
    {
      id: "g_comp35",
      question: "Which ACID property means all-or-nothing execution?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      correctIndex: 0
    },
    {
      id: "g_comp36",
      question: "What does CI mean in DevOps?",
      options: ["Continuous Integration", "Centralized Internet", "Code Isolation", "Cloud Installation"],
      correctIndex: 0
    },
    {
      id: "g_comp37",
      question: "Which is primarily a JavaScript runtime?",
      options: ["Node.js", "MySQL", "Nginx", "Docker"],
      correctIndex: 0
    },
    {
      id: "g_comp38",
      question: "What does REST generally identify with URIs?",
      options: ["Resources", "CPU registers", "MAC tables", "SQL triggers"],
      correctIndex: 0
    },
    {
      id: "g_comp39",
      question: "Which operation in a balanced BST is typically O(log n)?",
      options: ["Search", "Search only", "Printing", "Hashing"],
      correctIndex: 0
    },
    {
      id: "g_comp40",
      question: "What is an API gateway?",
      options: ["Entry point for routing and API policies", "Network cable", "Database table", "Compiler"],
      correctIndex: 0
    },
    {
      id: "g_comp41",
      question: "Which protocol sends email between mail servers?",
      options: ["SMTP", "IMAP", "DNS", "SNMP"],
      correctIndex: 0
    },
    {
      id: "g_comp42",
      question: "Which protocol synchronizes email stored on a server?",
      options: ["IMAP", "SMTP", "ARP", "ICMP"],
      correctIndex: 0
    },
    {
      id: "g_comp43",
      question: "What is garbage collection?",
      options: ["Automatic reclamation of unreachable memory", "Deleting backups", "Clearing browser history", "Compressing source"],
      correctIndex: 0
    },
    {
      id: "g_comp44",
      question: "Which clause filters groups after aggregation?",
      options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
      correctIndex: 1
    },
    {
      id: "g_comp45",
      question: "What does a JWT primarily contain?",
      options: ["Signed claims in a compact token", "A database schema", "A DNS record", "A file system"],
      correctIndex: 0
    },
    {
      id: "g_comp46",
      question: "Which security principle grants only necessary permissions?",
      options: ["Least privilege", "Fail-open", "Eventual consistency", "Round Robin"],
      correctIndex: 0
    },
    {
      id: "g_comp47",
      question: "What does idempotent mean for an operation?",
      options: ["Repeating it has the same intended effect", "It always fails", "It requires encryption", "It cannot be retried"],
      correctIndex: 0
    },
    {
      id: "g_comp48",
      question: "Which structure offers average O(1) key lookup?",
      options: ["Hash table", "Linked list", "Binary heap", "Stack"],
      correctIndex: 0
    },
    {
      id: "g_comp49",
      question: "What is horizontal scaling?",
      options: ["Adding more instances", "Adding RAM to one machine", "Reducing tables", "Compressing logs"],
      correctIndex: 0
    },
    {
      id: "g_comp50",
      question: "What is vertical scaling?",
      options: ["Adding resources to one machine", "Adding servers", "Adding DNS records", "Splitting strings"],
      correctIndex: 0
    },
    {
      id: "g_comp51",
      question: "Which consistency model can permit stale reads temporarily?",
      options: ["Eventual consistency", "Strict serializability", "Linearizability", "Atomicity"],
      correctIndex: 0
    },
    {
      id: "g_comp52",
      question: "What does a mutex protect?",
      options: ["A critical section", "A DNS zone", "A schema", "A subnet"],
      correctIndex: 0
    },
    {
      id: "g_comp53",
      question: "Which paradigm uses overlapping subproblems and optimal substructure?",
      options: ["Dynamic programming", "Random guessing", "Parsing", "Serialization"],
      correctIndex: 0
    },
    {
      id: "g_comp54",
      question: "What is memoization?",
      options: ["Caching function results", "Encrypting memory", "Sorting without storage", "Removing SQL duplicates"],
      correctIndex: 0
    },
    {
      id: "g_comp55",
      question: "What does a reverse proxy do?",
      options: ["Forwards client requests to backend servers", "Compiles kernels", "Stores Git commits", "Creates primary keys"],
      correctIndex: 0
    },
    {
      id: "g_comp56",
      question: "Which DNS record maps a hostname to an IPv4 address?",
      options: ["A", "MX", "CNAME", "TXT"],
      correctIndex: 0
    },
    {
      id: "g_comp57",
      question: "Which DNS record identifies mail servers?",
      options: ["MX", "A", "NS", "PTR"],
      correctIndex: 0
    },
    {
      id: "g_comp58",
      question: "What is NAT used for?",
      options: ["Translating IP address spaces", "Hashing passwords", "Scheduling CPU", "Encrypting disks"],
      correctIndex: 0
    },
    {
      id: "g_comp59",
      question: "Which attack overwhelms a service with traffic?",
      options: ["DDoS", "Phishing", "SQL injection", "CSRF"],
      correctIndex: 0
    },
    {
      id: "g_comp60",
      question: "What is SQL injection?",
      options: ["Manipulating SQL through unsafe input handling", "Encrypting a database", "Compressing SQL", "Creating an index"],
      correctIndex: 0
    },
    {
      id: "g_comp61",
      question: "Which defense helps prevent SQL injection?",
      options: ["Parameterized queries", "Longer table names", "More indexes", "CSS validation"],
      correctIndex: 0
    },
    {
      id: "g_comp62",
      question: "What does CORS control?",
      options: ["Browser cross-origin resource access", "Database replication", "CPU caching", "Disk partitioning"],
      correctIndex: 0
    },
    {
      id: "g_comp63",
      question: "Which header controls caching behavior?",
      options: ["Cache-Control", "Host", "Referer", "Upgrade"],
      correctIndex: 0
    },
    {
      id: "g_comp64",
      question: "What is a semaphore used for?",
      options: ["Controlling access to shared resources", "Resolving DNS", "Encrypting disks", "Building indexes"],
      correctIndex: 0
    },
    {
      id: "g_comp65",
      question: "Which structure is commonly used for BFS?",
      options: ["Queue", "Stack", "Heap", "Tree"],
      correctIndex: 0
    },
    {
      id: "g_comp66",
      question: "Which traversal naturally uses a stack?",
      options: ["DFS", "BFS", "Round Robin", "FCFS"],
      correctIndex: 0
    },
    {
      id: "g_comp67",
      question: "A topological ordering exists for which graph?",
      options: ["Directed acyclic graph", "Any cyclic graph", "Only complete graph", "Only weighted graph"],
      correctIndex: 0
    },
    {
      id: "g_comp68",
      question: "Which sorting algorithm has average O(n log n) time and is usually in-place?",
      options: ["Quick sort", "Bubble sort", "Linear search", "Counting sort"],
      correctIndex: 0
    },
    {
      id: "g_comp69",
      question: "What does CAP theorem concern?",
      options: ["Consistency, availability, partition tolerance trade-offs", "CPU caches", "Compiler phases", "Key lengths"],
      correctIndex: 0
    },
    {
      id: "g_comp70",
      question: "What is sharding?",
      options: ["Horizontal partitioning across nodes", "Encryption", "Alphabetical sorting", "Backup"],
      correctIndex: 0
    },
    {
      id: "g_comp71",
      question: "Which is a document-oriented database?",
      options: ["MongoDB", "PostgreSQL", "SQLite", "Oracle"],
      correctIndex: 0
    },
    {
      id: "g_comp72",
      question: "What is a message queue useful for?",
      options: ["Asynchronous producer-consumer communication", "CSS rendering", "CPU registers", "DNS resolution"],
      correctIndex: 0
    },
    {
      id: "g_comp73",
      question: "What are common observability signals?",
      options: ["Logs, metrics, traces", "Passwords only", "SQL tables only", "Source code only"],
      correctIndex: 0
    },
    {
      id: "g_comp74",
      question: "What is blue-green deployment?",
      options: ["Two environments with traffic switching", "Weekend-only deployment", "Two encrypted databases", "Two languages"],
      correctIndex: 0
    },
    {
      id: "g_comp75",
      question: "What is a canary release?",
      options: ["Gradual exposure of a new version", "Deleting old servers", "No monitoring", "Local-only deployment"],
      correctIndex: 0
    },
    {
      id: "g_comp76",
      question: "Which database isolation level prevents dirty reads but may allow non-repeatable reads?",
      options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
      correctIndex: 1
    },
    {
      id: "g_comp77",
      question: "What is a race-free program with respect to shared state?",
      options: ["One whose concurrent accesses are correctly synchronized", "One with no functions", "One using only SQL", "One without threads"],
      correctIndex: 0
    },
    {
      id: "g_comp78",
      question: "Which protocol is connectionless at the transport layer?",
      options: ["TCP", "UDP", "SCTP", "TLS"],
      correctIndex: 1
    },
    {
      id: "g_comp79",
      question: "What does RAID 1 primarily provide?",
      options: ["Mirroring", "Striping without redundancy", "Compression", "Encryption"],
      correctIndex: 0
    },
    {
      id: "g_comp80",
      question: "Which mechanism translates virtual addresses to physical addresses?",
      options: ["MMU", "ALU", "NIC", "BIOS"],
      correctIndex: 0
    }
  ],
  "English": [
    {
      id: "g_eng1",
      question: "Choose the grammatically correct sentence.",
      options: ["Neither of the proposals is acceptable.", "Neither of the proposals are acceptable.", "Neither proposals is acceptable.", "Neither proposal are acceptable."],
      correctIndex: 0
    },
    {
      id: "g_eng2",
      question: "Best synonym for mitigate?",
      options: ["Intensify", "Alleviate", "Ignore", "Predict"],
      correctIndex: 1
    },
    {
      id: "g_eng3",
      question: "Best antonym for implicit?",
      options: ["Inferred", "Explicit", "Suggested", "Unstated"],
      correctIndex: 1
    },
    {
      id: "g_eng4",
      question: "Choose the correct form: If I ___ earlier, I would have called.",
      options: ["knew", "had known", "have known", "would know"],
      correctIndex: 1
    },
    {
      id: "g_eng5",
      question: "Meaning of ubiquitous?",
      options: ["Present everywhere", "Rare", "Temporary", "Uncertain"],
      correctIndex: 0
    },
    {
      id: "g_eng6",
      question: "Choose the correct agreement.",
      options: ["A series of tests was conducted.", "A series of tests were conducted.", "A series of tests have conducted.", "A series of test were conducted."],
      correctIndex: 0
    },
    {
      id: "g_eng7",
      question: "Best synonym for pragmatic?",
      options: ["Idealistic", "Practical", "Emotional", "Abstract"],
      correctIndex: 1
    },
    {
      id: "g_eng8",
      question: "Best antonym for ambiguous?",
      options: ["Vague", "Unclear", "Definite", "Complex"],
      correctIndex: 2
    },
    {
      id: "g_eng9",
      question: "Fill in: She is proficient ___ Python.",
      options: ["at", "in", "on", "with"],
      correctIndex: 1
    },
    {
      id: "g_eng10",
      question: "Choose the correct tense.",
      options: ["He has been working here since 2022.", "He is working here since 2022.", "He had working here since 2022.", "He has working here since 2022."],
      correctIndex: 0
    },
    {
      id: "g_eng11",
      question: "Meaning of concise?",
      options: ["Brief and clear", "Lengthy", "Vague", "Emotional"],
      correctIndex: 0
    },
    {
      id: "g_eng12",
      question: "Passive: They will complete the project.",
      options: ["The project will be completed.", "The project is completed.", "The project was completed.", "The project has completed."],
      correctIndex: 0
    },
    {
      id: "g_eng13",
      question: "Correct article: She is ___ MBA graduate.",
      options: ["a", "an", "the", "no article"],
      correctIndex: 1
    },
    {
      id: "g_eng14",
      question: "Identify the adverb in 'The algorithm performed remarkably well.'",
      options: ["algorithm", "performed", "remarkably", "well"],
      correctIndex: 2
    },
    {
      id: "g_eng15",
      question: "Fill in: He insisted ___ paying the bill.",
      options: ["on", "for", "to", "at"],
      correctIndex: 0
    },
    {
      id: "g_eng16",
      question: "Best synonym for scrutinize?",
      options: ["Examine closely", "Ignore", "Simplify", "Predict"],
      correctIndex: 0
    },
    {
      id: "g_eng17",
      question: "Best antonym for obsolete?",
      options: ["Outdated", "Current", "Broken", "Rare"],
      correctIndex: 1
    },
    {
      id: "g_eng18",
      question: "Meaning of inference?",
      options: ["Conclusion drawn from evidence", "Quotation", "Grammar error", "Average"],
      correctIndex: 0
    },
    {
      id: "g_eng19",
      question: "Reported speech: He said, 'I am busy.'",
      options: ["He said that he was busy.", "He said that I am busy.", "He says that he was busy.", "He said that he is busy yesterday."],
      correctIndex: 0
    },
    {
      id: "g_eng20",
      question: "Conditional: If she had studied, she ___.",
      options: ["passes", "would pass", "would have passed", "will pass"],
      correctIndex: 2
    },
    {
      id: "g_eng21",
      question: "Correct spelling?",
      options: ["accommodate", "accomodate", "acommodate", "accomadate"],
      correctIndex: 0
    },
    {
      id: "g_eng22",
      question: "Correct spelling?",
      options: ["entrepreneur", "entreprenuer", "enterpreneur", "entrepenur"],
      correctIndex: 0
    },
    {
      id: "g_eng23",
      question: "Meaning of ephemeral?",
      options: ["Very short-lived", "Very large", "Permanent", "Highly technical"],
      correctIndex: 0
    },
    {
      id: "g_eng24",
      question: "Choose correct usage.",
      options: ["The data suggest a correlation.", "The data suggests a correlation.", "The datas suggest a correlation.", "The data suggesting correlation."],
      correctIndex: 0
    },
    {
      id: "g_eng25",
      question: "Correct collocation?",
      options: ["make a decision", "do a decision", "take a decisioning", "make decisioning"],
      correctIndex: 0
    },
    {
      id: "g_eng26",
      question: "Best synonym for eloquent?",
      options: ["Articulate", "Confused", "Silent", "Careless"],
      correctIndex: 0
    },
    {
      id: "g_eng27",
      question: "Best antonym for scarce?",
      options: ["Limited", "Abundant", "Rare", "Insufficient"],
      correctIndex: 1
    },
    {
      id: "g_eng28",
      question: "Fill in: The results are superior ___ those obtained previously.",
      options: ["than", "to", "from", "with"],
      correctIndex: 1
    },
    {
      id: "g_eng29",
      question: "Correct inversion?",
      options: ["No sooner had he arrived than it started raining.", "No sooner he had arrived than it started raining.", "No sooner had he arrived when it started raining.", "No sooner he arrived than it had started raining."],
      correctIndex: 0
    },
    {
      id: "g_eng30",
      question: "Meaning of cogent?",
      options: ["Clear and convincing", "Unrelated", "Emotional", "Uncertain"],
      correctIndex: 0
    },
    {
      id: "g_eng31",
      question: "Meaning of equivocal?",
      options: ["Open to more than one interpretation", "Certain", "Brief", "Technical"],
      correctIndex: 0
    },
    {
      id: "g_eng32",
      question: "Correct form: The report needs to be ___.",
      options: ["proofread", "proofreaded", "proofreading", "proofreader"],
      correctIndex: 0
    },
    {
      id: "g_eng33",
      question: "Choose correct agreement.",
      options: ["Each of the candidates has submitted a résumé.", "Each of the candidates have submitted a résumé.", "Each candidates has submitted a résumé.", "Each of candidates have submitted résumé."],
      correctIndex: 0
    },
    {
      id: "g_eng34",
      question: "Best synonym for resilient?",
      options: ["Able to recover", "Easily damaged", "Rigid", "Unpredictable"],
      correctIndex: 0
    },
    {
      id: "g_eng35",
      question: "Best antonym for conventional?",
      options: ["Traditional", "Unusual", "Standard", "Typical"],
      correctIndex: 1
    },
    {
      id: "g_eng36",
      question: "Meaning of discrepancy?",
      options: ["Difference or inconsistency", "Agreement", "Prediction", "Unit"],
      correctIndex: 0
    },
    {
      id: "g_eng37",
      question: "Correct word: The policy had a significant ___ on costs.",
      options: ["affect", "effect", "effects", "affects"],
      correctIndex: 1
    },
    {
      id: "g_eng38",
      question: "Correct word: The policy will ___ behavior.",
      options: ["affect", "effect", "effects", "affects"],
      correctIndex: 0
    },
    {
      id: "g_eng39",
      question: "Best synonym for novel in academic context?",
      options: ["Original", "Ancient", "Ordinary", "Repeated"],
      correctIndex: 0
    },
    {
      id: "g_eng40",
      question: "Meaning of conundrum?",
      options: ["Difficult problem", "Clear instruction", "Routine task", "Average"],
      correctIndex: 0
    },
    {
      id: "g_eng41",
      question: "Correct subjunctive construction.",
      options: ["It is important that he be informed.", "It is important that he is informeded.", "It is important that he being informed.", "It is important that he informed."],
      correctIndex: 0
    },
    {
      id: "g_eng42",
      question: "Despite ___ tired, she continued.",
      options: ["being", "be", "was", "been"],
      correctIndex: 0
    },
    {
      id: "g_eng43",
      question: "Best synonym for lucid?",
      options: ["Clear", "Obscure", "Lengthy", "Hostile"],
      correctIndex: 0
    },
    {
      id: "g_eng44",
      question: "Best antonym for meticulous?",
      options: ["Careless", "Precise", "Thorough", "Systematic"],
      correctIndex: 0
    },
    {
      id: "g_eng45",
      question: "Meaning of plausible?",
      options: ["Reasonable or believable", "Proven beyond doubt", "Impossible", "Unrelated"],
      correctIndex: 0
    },
    {
      id: "g_eng46",
      question: "He is responsible ___ maintaining the server.",
      options: ["for", "to", "of", "with"],
      correctIndex: 0
    },
    {
      id: "g_eng47",
      question: "Choose correct agreement.",
      options: ["The number of applicants has increased.", "The number of applicants have increased.", "The number of applicants are increased.", "The numbers of applicant has increased."],
      correctIndex: 0
    },
    {
      id: "g_eng48",
      question: "Choose correct agreement.",
      options: ["A number of applicants have withdrawn.", "A number of applicants has withdrawn.", "A number applicants has withdrawn.", "A number of applicant have withdrew."],
      correctIndex: 0
    },
    {
      id: "g_eng49",
      question: "Meaning of ubiquity?",
      options: ["Being widespread or everywhere", "Temporary state", "Legal restriction", "Statistical error"],
      correctIndex: 0
    },
    {
      id: "g_eng50",
      question: "Best synonym for bolster?",
      options: ["Strengthen", "Weaken", "Remove", "Delay"],
      correctIndex: 0
    },
    {
      id: "g_eng51",
      question: "Best antonym for deteriorate?",
      options: ["Improve", "Decline", "Damage", "Decay"],
      correctIndex: 0
    },
    {
      id: "g_eng52",
      question: "Choose the correct adjective.",
      options: ["The engineer gave a coherent explanation.", "The engineer gave a coherently explanation.", "The engineer gave a coherence explanation.", "The engineer gave a cohered explanation."],
      correctIndex: 0
    },
    {
      id: "g_eng53",
      question: "Choose the correct dangling-modifier-free sentence.",
      options: ["Having finished the experiment, the researchers analyzed the data.", "Having finished the experiment, the data was analyzed.", "Having finished the experiment, the analysis was researchers.", "Having finishing the experiment, researchers analyzed data."],
      correctIndex: 0
    },
    {
      id: "g_eng54",
      question: "What is a thesis?",
      options: ["A central claim or argument", "A bibliography entry", "A grammar rule", "A random example"],
      correctIndex: 0
    },
    {
      id: "g_eng55",
      question: "What is a counterargument?",
      options: ["An opposing argument considered in discussion", "A conclusion without evidence", "A citation style", "A definition"],
      correctIndex: 0
    },
    {
      id: "g_eng56",
      question: "Best synonym for substantiate?",
      options: ["Support with evidence", "Contradict", "Summarize", "Avoid"],
      correctIndex: 0
    },
    {
      id: "g_eng57",
      question: "What does consequently signal?",
      options: ["A result", "A contrast", "A condition", "A definition"],
      correctIndex: 0
    },
    {
      id: "g_eng58",
      question: "What does nevertheless signal?",
      options: ["Contrast", "Cause", "Sequence", "Definition"],
      correctIndex: 0
    },
    {
      id: "g_eng59",
      question: "Choose the best phrase.",
      options: ["compelling evidence", "compelled evidence", "compel evidence", "compellingly evidence"],
      correctIndex: 0
    },
    {
      id: "g_eng60",
      question: "Correct agreement with neither/nor?",
      options: ["Neither the manager nor the engineers were available.", "Neither the manager nor the engineers was available.", "Neither the manager or the engineers were available.", "Neither manager nor engineers was available."],
      correctIndex: 0
    },
    {
      id: "g_eng61",
      question: "Correct pronoun usage?",
      options: ["Between you and me, the plan needs revision.", "Between you and I, the plan needs revision.", "Between yourself and I, the plan needs revision.", "Between me and myself, the plan needs revision."],
      correctIndex: 0
    },
    {
      id: "g_eng62",
      question: "Meaning of redundant in technical writing?",
      options: ["Unnecessarily repetitive", "Innovative", "Exact", "Binding"],
      correctIndex: 0
    },
    {
      id: "g_eng63",
      question: "Best synonym for robust?",
      options: ["Strong and resilient", "Fragile", "Temporary", "Ambiguous"],
      correctIndex: 0
    },
    {
      id: "g_eng64",
      question: "Meaning of tentative?",
      options: ["Not certain or final", "Proven", "Permanent", "Mandatory"],
      correctIndex: 0
    },
    {
      id: "g_eng65",
      question: "Correct phrase?",
      options: ["in accordance with the policy", "in accordance to the policy", "on accordance with the policy", "at accordance with the policy"],
      correctIndex: 0
    },
    {
      id: "g_eng66",
      question: "Correct plural agreement?",
      options: ["The criteria are clearly defined.", "The criteria is clearly defined.", "The criterion are clearly defined.", "The criterias are clearly defined."],
      correctIndex: 0
    },
    {
      id: "g_eng67",
      question: "Choose the correct sentence.",
      options: ["This is one of the best solutions that we have tested.", "This is one of the best solution that we have tested.", "This is one of the best solutions which we has tested.", "This one is best solutions that we tested."],
      correctIndex: 0
    },
    {
      id: "g_eng68",
      question: "Meaning of intermittent?",
      options: ["Occurring at intervals", "Continuous", "Perfectly predictable", "Permanent"],
      correctIndex: 0
    },
    {
      id: "g_eng69",
      question: "Best synonym for viable?",
      options: ["Practical and workable", "Impossible", "Illegal", "Unrelated"],
      correctIndex: 0
    },
    {
      id: "g_eng70",
      question: "Meaning of infer?",
      options: ["Draw a conclusion from evidence", "State explicitly", "Repeat", "Define"],
      correctIndex: 0
    },
    {
      id: "g_eng71",
      question: "Best word: The proposal is technically ___ but financially impractical.",
      options: ["feasible", "feasibility", "feasibly", "feased"],
      correctIndex: 0
    },
    {
      id: "g_eng72",
      question: "Choose correct agreement.",
      options: ["The software, along with its dependencies, was updated.", "The software, along with its dependencies, were updated.", "The software along with its dependencies were updates.", "The software and dependencies was updated."],
      correctIndex: 0
    },
    {
      id: "g_eng73",
      question: "Best synonym for comprehensive?",
      options: ["Thorough and complete", "Narrow", "Temporary", "Partial"],
      correctIndex: 0
    },
    {
      id: "g_eng74",
      question: "Meaning of paradigm?",
      options: ["A model or pattern of thought", "Numerical error", "Legal penalty", "Punctuation mark"],
      correctIndex: 0
    },
    {
      id: "g_eng75",
      question: "Choose the correct use of affect/effect.",
      options: ["The effect was significant.", "The affect was significant.", "The effect significantly was.", "The affectingly was significant."],
      correctIndex: 0
    },
    {
      id: "g_eng76",
      question: "Choose the correct sentence.",
      options: ["She suggested that he leave early.", "She suggested that he leaves early.", "She suggested him to leave early.", "She suggested that he left early yesterday."],
      correctIndex: 0
    },
    {
      id: "g_eng77",
      question: "Choose the correct inversion.",
      options: ["Rarely have we seen such rapid growth.", "Rarely we have seen such rapid growth.", "Rarely did we saw such rapid growth.", "Rarely have seen we such rapid growth."],
      correctIndex: 0
    },
    {
      id: "g_eng78",
      question: "Meaning of ostensibly?",
      options: ["Apparently, though not necessarily actually", "Secretly", "Permanently", "Mathematically"],
      correctIndex: 0
    },
    {
      id: "g_eng79",
      question: "Meaning of ubiquitous?",
      options: ["Found everywhere", "Found nowhere", "Found rarely", "Found only online"],
      correctIndex: 0
    },
    {
      id: "g_eng80",
      question: "Choose the correct phrase.",
      options: ["different from", "different than only", "different to always", "different with"],
      correctIndex: 0
    }
  ],
  "Aptitude": [
    {
      id: "g_math1",
      question: "A quantity rises 20% and then falls 20%. Net change?",
      options: ["0%", "4% decrease", "4% increase", "2% decrease"],
      correctIndex: 1
    },
    {
      id: "g_math2",
      question: "A finishes in 12 days and B in 18 days. Together?",
      options: ["6.2 days", "7.2 days", "8 days", "9 days"],
      correctIndex: 1
    },
    {
      id: "g_math3",
      question: "A:B=3:5 and total=64. B=?",
      options: ["24", "32", "40", "48"],
      correctIndex: 2
    },
    {
      id: "g_math4",
      question: "360 km in 4.5 h gives speed:",
      options: ["72", "80", "90", "96"],
      correctIndex: 1
    },
    {
      id: "g_math5",
      question: "If x+1/x=5, x²+1/x²=?",
      options: ["21", "23", "25", "27"],
      correctIndex: 1
    },
    {
      id: "g_math6",
      question: "Average of 8 numbers is 24. Remove 38. New average?",
      options: ["21", "22", "22 2/3", "23"],
      correctIndex: 2
    },
    {
      id: "g_math7",
      question: "₹2,000 with 15% discount sells for:",
      options: ["₹1,650", "₹1,700", "₹1,750", "₹1,800"],
      correctIndex: 1
    },
    {
      id: "g_math8",
      question: "₹800 cost plus 12.5% profit gives:",
      options: ["₹880", "₹890", "₹900", "₹920"],
      correctIndex: 0
    },
    {
      id: "g_math9",
      question: "A sum doubles in 8 years at simple interest. Rate?",
      options: ["10%", "12.5%", "15%", "16%"],
      correctIndex: 1
    },
    {
      id: "g_math10",
      question: "CI on ₹10,000 at 10% for 2 years:",
      options: ["₹2,000", "₹2,100", "₹2,200", "₹2,500"],
      correctIndex: 1
    },
    {
      id: "g_math11",
      question: "3x−7=20. x=?",
      options: ["7", "8", "9", "10"],
      correctIndex: 2
    },
    {
      id: "g_math12",
      question: "2x+3y=19 and x=2. y=?",
      options: ["4", "5", "6", "7"],
      correctIndex: 1
    },
    {
      id: "g_math13",
      question: "LCM of 18 and 24:",
      options: ["48", "54", "72", "96"],
      correctIndex: 2
    },
    {
      id: "g_math14",
      question: "HCF of 84 and 126:",
      options: ["21", "28", "42", "63"],
      correctIndex: 2
    },
    {
      id: "g_math15",
      question: "Which leaves remainder 3 when divided by 7?",
      options: ["24", "25", "26", "28"],
      correctIndex: 0
    },
    {
      id: "g_math16",
      question: "15% of 240:",
      options: ["24", "30", "36", "40"],
      correctIndex: 2
    },
    {
      id: "g_math17",
      question: "40% of a number is 72. Number?",
      options: ["160", "180", "200", "220"],
      correctIndex: 1
    },
    {
      id: "g_math18",
      question: "50,000 to 57,500 is what increase?",
      options: ["10%", "12%", "15%", "17.5%"],
      correctIndex: 2
    },
    {
      id: "g_math19",
      question: "Investments 40,000 and 60,000 for same time. Profit ratio?",
      options: ["2:3", "3:2", "4:5", "5:4"],
      correctIndex: 0
    },
    {
      id: "g_math20",
      question: "A invests 50,000 for 12 months, B 60,000 for 10 months. Ratio?",
      options: ["5:6", "1:1", "6:5", "10:12"],
      correctIndex: 1
    },
    {
      id: "g_math21",
      question: "Still-water speed 12, stream 3. Downstream?",
      options: ["9", "12", "15", "18"],
      correctIndex: 2
    },
    {
      id: "g_math22",
      question: "Still-water speed 12, upstream 8. Stream?",
      options: ["2", "3", "4", "5"],
      correctIndex: 2
    },
    {
      id: "g_math23",
      question: "6 km/h for 45 minutes covers:",
      options: ["3.5 km", "4 km", "4.5 km", "5 km"],
      correctIndex: 2
    },
    {
      id: "g_math24",
      question: "Two trains 120m and 180m at 54 and 36 km/h opposite. Crossing time?",
      options: ["10 s", "12 s", "15 s", "18 s"],
      correctIndex: 1
    },
    {
      id: "g_math25",
      question: "Pipes fill in 10h and 15h. Together?",
      options: ["5h", "6h", "7h", "8h"],
      correctIndex: 1
    },
    {
      id: "g_math26",
      question: "Pipe fills in 8h, leak empties in 24h. Net time?",
      options: ["10h", "12h", "14h", "16h"],
      correctIndex: 1
    },
    {
      id: "g_math27",
      question: "21L mixture milk:water=5:2. Milk?",
      options: ["12L", "14L", "15L", "16L"],
      correctIndex: 2
    },
    {
      id: "g_math28",
      question: "30L mixture milk:water=2:3. Replace water with milk to make 1:1. Water removed?",
      options: ["4L", "5L", "6L", "8L"],
      correctIndex: 2
    },
    {
      id: "g_math29",
      question: "5 workers take 18 days. 9 workers take:",
      options: ["8", "10", "12", "14"],
      correctIndex: 1
    },
    {
      id: "g_math30",
      question: "A is 25% more efficient than B. B takes 20 days. A takes:",
      options: ["15", "16", "18", "20"],
      correctIndex: 1
    },
    {
      id: "g_math31",
      question: "Probability of an ace from 52 cards:",
      options: ["1/13", "1/26", "1/4", "4/13"],
      correctIndex: 0
    },
    {
      id: "g_math32",
      question: "Two dice: probability sum is 9:",
      options: ["1/9", "1/12", "1/6", "5/36"],
      correctIndex: 3
    },
    {
      id: "g_math33",
      question: "Arrangements of 5 distinct books:",
      options: ["25", "60", "120", "240"],
      correctIndex: 2
    },
    {
      id: "g_math34",
      question: "Selections of 3 from 8:",
      options: ["24", "56", "112", "336"],
      correctIndex: 1
    },
    {
      id: "g_math35",
      question: "Successive discounts 10% and 20% equal:",
      options: ["28%", "30%", "32%", "35%"],
      correctIndex: 0
    },
    {
      id: "g_math36",
      question: "x:y=4:7 and y:z=14:15. x:z?",
      options: ["4:15", "8:15", "8:21", "14:15"],
      correctIndex: 1
    },
    {
      id: "g_math37",
      question: "Circle area r=7, π=22/7:",
      options: ["144", "154", "164", "176"],
      correctIndex: 1
    },
    {
      id: "g_math38",
      question: "Cylinder volume r=3,h=10:",
      options: ["30π", "60π", "90π", "120π"],
      correctIndex: 2
    },
    {
      id: "g_math39",
      question: "Rectangle perimeter 50, length 15. Area?",
      options: ["120", "150", "160", "175"],
      correctIndex: 1
    },
    {
      id: "g_math40",
      question: "Roots of x²−7x+12=0. Sum of roots?",
      options: ["5", "7", "12", "19"],
      correctIndex: 1
    },
    {
      id: "g_math41",
      question: "Roots of x²−5x+6=0. Product?",
      options: ["5", "6", "−5", "−6"],
      correctIndex: 1
    },
    {
      id: "g_math42",
      question: "Sum of first 20 positive integers:",
      options: ["190", "200", "210", "220"],
      correctIndex: 2
    },
    {
      id: "g_math43",
      question: "Sum of first 15 odd positive integers:",
      options: ["225", "210", "240", "255"],
      correctIndex: 0
    },
    {
      id: "g_math44",
      question: "Next: 2,6,12,20,30,?",
      options: ["40", "42", "44", "48"],
      correctIndex: 1
    },
    {
      id: "g_math45",
      question: "a:b=2:3, b:c=4:5. a:b:c?",
      options: ["8:12:15", "2:3:5", "8:6:15", "4:6:5"],
      correctIndex: 0
    },
    {
      id: "g_math46",
      question: "Increase 10% then 15% gives total increase:",
      options: ["25%", "26.5%", "27%", "28%"],
      correctIndex: 1
    },
    {
      id: "g_math47",
      question: "Decrease 20% then increase 20% gives:",
      options: ["0%", "2% decrease", "4% decrease", "4% increase"],
      correctIndex: 2
    },
    {
      id: "g_math48",
      question: "12 men or 18 women finish in 20 days. Man:woman efficiency?",
      options: ["2:3", "3:2", "1:1", "4:3"],
      correctIndex: 1
    },
    {
      id: "g_math49",
      question: "Clock gains 5 minutes/hour. Gain in 12 hours?",
      options: ["30m", "45m", "60m", "75m"],
      correctIndex: 2
    },
    {
      id: "g_math50",
      question: "Smaller angle at 3:20:",
      options: ["10°", "20°", "30°", "40°"],
      correctIndex: 1
    },
    {
      id: "g_math51",
      question: "8% of x=12. x=?",
      options: ["120", "150", "180", "200"],
      correctIndex: 1
    },
    {
      id: "g_math52",
      question: "Number increased by 30 becomes 125% of itself. Number?",
      options: ["100", "120", "150", "180"],
      correctIndex: 0
    },
    {
      id: "g_math53",
      question: "2/5 of a number is 18. Number?",
      options: ["36", "40", "45", "50"],
      correctIndex: 2
    },
    {
      id: "g_math54",
      question: "Selling for ₹1,000 at 25% profit. Cost?",
      options: ["₹750", "₹800", "₹825", "₹850"],
      correctIndex: 1
    },
    {
      id: "g_math55",
      question: "Selling price 20% below cost means:",
      options: ["15% loss", "20% loss", "25% loss", "30% loss"],
      correctIndex: 1
    },
    {
      id: "g_math56",
      question: "₹10,000 at 10% CI for 3 years becomes:",
      options: ["₹13,100", "₹13,310", "₹13,500", "₹13,750"],
      correctIndex: 1
    },
    {
      id: "g_math57",
      question: "Median of 3,7,9,12,15:",
      options: ["7", "9", "12", "15"],
      correctIndex: 1
    },
    {
      id: "g_math58",
      question: "Mode of 2,3,3,5,7,3,8:",
      options: ["2", "3", "5", "7"],
      correctIndex: 1
    },
    {
      id: "g_math59",
      question: "Mean of 5 numbers is 18. Sum?",
      options: ["72", "80", "90", "100"],
      correctIndex: 2
    },
    {
      id: "g_math60",
      question: "Half distance at 40 and half at 60. Average speed?",
      options: ["48", "50", "52", "54"],
      correctIndex: 0
    },
    {
      id: "g_math61",
      question: "Spends 75% income and saves ₹5,000. Income?",
      options: ["₹15,000", "₹20,000", "₹25,000", "₹30,000"],
      correctIndex: 1
    },
    {
      id: "g_math62",
      question: "3x/4=18. x=?",
      options: ["18", "24", "27", "32"],
      correctIndex: 1
    },
    {
      id: "g_math63",
      question: "Remainder when 2^10 is divided by 7:",
      options: ["1", "2", "3", "4"],
      correctIndex: 3
    },
    {
      id: "g_math64",
      question: "Units digit of 7^103:",
      options: ["1", "3", "7", "9"],
      correctIndex: 1
    },
    {
      id: "g_math65",
      question: "Divisible by both 6 and 8 implies divisible by:",
      options: ["12", "18", "24", "48"],
      correctIndex: 2
    },
    {
      id: "g_math66",
      question: "Simple interest on ₹6,000 at 8% for 2.5 years:",
      options: ["₹960", "₹1,000", "₹1,200", "₹1,400"],
      correctIndex: 2
    },
    {
      id: "g_math67",
      question: "A:B:C=2:3:5 and C=₹2,500. Total?",
      options: ["₹4,000", "₹5,000", "₹6,000", "₹7,500"],
      correctIndex: 1
    },
    {
      id: "g_math68",
      question: "log10(1000)=",
      options: ["2", "3", "10", "100"],
      correctIndex: 1
    },
    {
      id: "g_math69",
      question: "2^x=32. x=?",
      options: ["4", "5", "6", "8"],
      correctIndex: 1
    },
    {
      id: "g_math70",
      question: "3×4 matrix has how many elements?",
      options: ["7", "12", "16", "24"],
      correctIndex: 1
    },
    {
      id: "g_math71",
      question: "Dot product of (1,2) and (3,4):",
      options: ["7", "10", "11", "14"],
      correctIndex: 1
    },
    {
      id: "g_math72",
      question: "det([[2,1],[3,4]])=",
      options: ["5", "6", "8", "11"],
      correctIndex: 0
    },
    {
      id: "g_math73",
      question: "f(x)=x²+2x. f(3)=",
      options: ["12", "15", "18", "21"],
      correctIndex: 1
    },
    {
      id: "g_math74",
      question: "80% of 60 questions:",
      options: ["42", "48", "52", "54"],
      correctIndex: 1
    },
    {
      id: "g_math75",
      question: "4 machines make 400 units in 5h. 8 machines in 5h:",
      options: ["600", "700", "800", "1000"],
      correctIndex: 2
    },
    {
      id: "g_math76",
      question: "40% of a project takes 8 days. Total at constant rate:",
      options: ["16", "18", "20", "24"],
      correctIndex: 2
    },
    {
      id: "g_math77",
      question: "25% then 10% discount gives equivalent discount:",
      options: ["32.5%", "33.5%", "35%", "37.5%"],
      correctIndex: 0
    },
    {
      id: "g_math78",
      question: "If 5x−3=2x+18, x equals:",
      options: ["5", "6", "7", "8"],
      correctIndex: 2
    },
    {
      id: "g_math79",
      question: "A sum of ₹8,000 earns 7.5% simple interest for 2 years. Interest is:",
      options: ["₹900", "₹1,000", "₹1,200", "₹1,500"],
      correctIndex: 2
    },
    {
      id: "g_math80",
      question: "A:B=7:9 and B:C=3:5. Then A:C is:",
      options: ["7:15", "21:45", "7:5", "21:15"],
      correctIndex: 0
    }
  ],
  "Logical Reasoning": [
    {
      id: "g_logic1",
      question: "Next: 3,8,15,24,35,?",
      options: ["46", "48", "50", "52"],
      correctIndex: 1
    },
    {
      id: "g_logic2",
      question: "Next: 2,6,12,20,30,?",
      options: ["40", "42", "44", "48"],
      correctIndex: 1
    },
    {
      id: "g_logic3",
      question: "Next letter: B,E,I,N,T,?",
      options: ["Y", "Z", "A", "B"],
      correctIndex: 1
    },
    {
      id: "g_logic4",
      question: "If CODE→DPEF, DATA→?",
      options: ["EBUB", "EATB", "DBUB", "EBTB"],
      correctIndex: 0
    },
    {
      id: "g_logic5",
      question: "If APPLE→BQQMF, MANGO→?",
      options: ["NBOHP", "NBMHP", "NBOGO", "MBOHP"],
      correctIndex: 0
    },
    {
      id: "g_logic6",
      question: "All analysts are readers. Some readers are writers. Which definitely follows?",
      options: ["All analysts are writers", "Some writers are analysts", "All analysts are readers", "No writers are readers"],
      correctIndex: 2
    },
    {
      id: "g_logic7",
      question: "D>A>B>C in height. Shortest?",
      options: ["A", "B", "C", "D"],
      correctIndex: 2
    },
    {
      id: "g_logic8",
      question: "After a 90° clockwise rotation, North becomes East. South becomes:",
      options: ["East", "West", "North", "South"],
      correctIndex: 1
    },
    {
      id: "g_logic9",
      question: "5 km north, 3 east, 5 south. Distance from start?",
      options: ["2 km", "3 km", "5 km", "8 km"],
      correctIndex: 1
    },
    {
      id: "g_logic10",
      question: "9th from left and 12th from right. Total?",
      options: ["19", "20", "21", "22"],
      correctIndex: 1
    },
    {
      id: "g_logic11",
      question: "All squares are rectangles. Some rectangles are blue. Definitely true:",
      options: ["All squares blue", "Some squares blue", "All squares rectangles", "No rectangles squares"],
      correctIndex: 2
    },
    {
      id: "g_logic12",
      question: "Odd one out:",
      options: ["16", "25", "36", "54"],
      correctIndex: 3
    },
    {
      id: "g_logic13",
      question: "Odd one out:",
      options: ["Mercury", "Venus", "Earth", "Moon"],
      correctIndex: 3
    },
    {
      id: "g_logic14",
      question: "Book:Reading :: Fork:?",
      options: ["Writing", "Eating", "Cutting", "Cooking"],
      correctIndex: 1
    },
    {
      id: "g_logic15",
      question: "Bird:Nest :: Bee:?",
      options: ["Hive", "Web", "Burrow", "Den"],
      correctIndex: 0
    },
    {
      id: "g_logic16",
      question: "If 1 Jan is Monday, 1 Feb in a non-leap year is:",
      options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      correctIndex: 2
    },
    {
      id: "g_logic17",
      question: "Wednesday + 100 days:",
      options: ["Monday", "Tuesday", "Thursday", "Friday"],
      correctIndex: 2
    },
    {
      id: "g_logic18",
      question: "At 2:30, hour hand lies between:",
      options: ["1 and 2", "2 and 3", "3 and 4", "4 and 5"],
      correctIndex: 1
    },
    {
      id: "g_logic19",
      question: "Which order could satisfy A left of B, C right of B, D left of A?",
      options: ["D-A-B-C-E", "A-D-B-C-E", "D-B-A-C-E", "E-D-A-C-B"],
      correctIndex: 0
    },
    {
      id: "g_logic20",
      question: "P is mother of Q; Q is brother of R. P is R's:",
      options: ["Aunt", "Mother", "Sister", "Grandmother"],
      correctIndex: 1
    },
    {
      id: "g_logic21",
      question: "X is brother of Y; Y is daughter of Z. X is Z's:",
      options: ["Son", "Brother", "Father", "Uncle"],
      correctIndex: 0
    },
    {
      id: "g_logic22",
      question: "7:49 :: 9:?",
      options: ["72", "81", "90", "99"],
      correctIndex: 1
    },
    {
      id: "g_logic23",
      question: "4:64 :: 5:?",
      options: ["100", "115", "125", "150"],
      correctIndex: 2
    },
    {
      id: "g_logic24",
      question: "AZ,BY,CX,DW,?",
      options: ["EV", "FU", "EW", "DV"],
      correctIndex: 0
    },
    {
      id: "g_logic25",
      question: "AB,DE,GH,JK,?",
      options: ["LM", "MN", "NO", "OP"],
      correctIndex: 1
    },
    {
      id: "g_logic26",
      question: "If × means +, + means −, − means ×, then 8×3+2=",
      options: ["9", "13", "24", "26"],
      correctIndex: 0
    },
    {
      id: "g_logic27",
      question: "Which relation is valid if P=mother,Q=brother,R=father and PQR is read left-to-right?",
      options: ["Mother's brother's father", "Mother's father", "Brother's mother", "Father's brother"],
      correctIndex: 0
    },
    {
      id: "g_logic28",
      question: "Surgeons, Doctors, Engineers relation:",
      options: ["Surgeons subset of Doctors; Engineers separate", "Doctors subset of Surgeons", "All identical", "All overlap completely"],
      correctIndex: 0
    },
    {
      id: "g_logic29",
      question: "Odd one: 8,27,64,100,125",
      options: ["8", "27", "100", "125"],
      correctIndex: 2
    },
    {
      id: "g_logic30",
      question: "Next: 1,4,9,16,25,?",
      options: ["30", "36", "42", "49"],
      correctIndex: 1
    },
    {
      id: "g_logic31",
      question: "Next: 81,27,9,3,?",
      options: ["0", "1", "2", "6"],
      correctIndex: 1
    },
    {
      id: "g_logic32",
      question: "Next: 5,10,20,40,?",
      options: ["60", "70", "80", "100"],
      correctIndex: 2
    },
    {
      id: "g_logic33",
      question: "Next: 100,95,85,70,50,?",
      options: ["35", "30", "25", "20"],
      correctIndex: 2
    },
    {
      id: "g_logic34",
      question: "All successful projects require planning. Which conclusion follows?",
      options: ["Planning can contribute to success", "Every planned project succeeds", "Both", "Neither"],
      correctIndex: 0
    },
    {
      id: "g_logic35",
      question: "Some laptops are expensive. Conclusion: Some expensive items are laptops.",
      options: ["Follows", "Does not follow", "Cannot be determined", "Contradicts"],
      correctIndex: 0
    },
    {
      id: "g_logic36",
      question: "If MONDAY is 123456, code for DAY?",
      options: ["456", "345", "256", "156"],
      correctIndex: 0
    },
    {
      id: "g_logic37",
      question: "A=1...Z=26. CAT value:",
      options: ["24", "26", "28", "30"],
      correctIndex: 1
    },
    {
      id: "g_logic38",
      question: "A=1...Z=26. CODE value:",
      options: ["25", "27", "29", "31"],
      correctIndex: 2
    },
    {
      id: "g_logic39",
      question: "Same relation as 8:64:",
      options: ["5:25", "6:18", "7:42", "9:72"],
      correctIndex: 0
    },
    {
      id: "g_logic40",
      question: "Same relation as 3:27:",
      options: ["4:16", "5:25", "6:216", "7:49"],
      correctIndex: 2
    },
    {
      id: "g_logic41",
      question: "Cube has how many edges?",
      options: ["8", "10", "12", "14"],
      correctIndex: 2
    },
    {
      id: "g_logic42",
      question: "On a standard die, opposite faces sum to 7. Opposite of 1:",
      options: ["2", "4", "5", "6"],
      correctIndex: 3
    },
    {
      id: "g_logic43",
      question: "Mirror placed right of ABC gives:",
      options: ["ABC", "CBA", "BAC", "ACB"],
      correctIndex: 1
    },
    {
      id: "g_logic44",
      question: "One fold and one hole punched through both layers. Unfolded holes:",
      options: ["1", "2", "3", "4"],
      correctIndex: 1
    },
    {
      id: "g_logic45",
      question: "6 people each shake hands once. Total:",
      options: ["12", "15", "18", "30"],
      correctIndex: 1
    },
    {
      id: "g_logic46",
      question: "8 teams, each pair plays once. Matches:",
      options: ["24", "28", "32", "56"],
      correctIndex: 1
    },
    {
      id: "g_logic47",
      question: "Every coder is a problem solver; some problem solvers are musicians. Certain:",
      options: ["Some coders musicians", "All musicians coders", "Every coder problem solver", "No coders musicians"],
      correctIndex: 2
    },
    {
      id: "g_logic48",
      question: "A older than B by 5; B older than C by 7; C=20. A=?",
      options: ["25", "27", "32", "35"],
      correctIndex: 2
    },
    {
      id: "g_logic49",
      question: "Father is 3 times son's age; total 48. Son?",
      options: ["10", "12", "14", "16"],
      correctIndex: 1
    },
    {
      id: "g_logic50",
      question: "Rank 7th from top and 18th from bottom. Total?",
      options: ["24", "25", "26", "27"],
      correctIndex: 1
    },
    {
      id: "g_logic51",
      question: "Add 5 to even and 3 to odd. 8 becomes:",
      options: ["10", "11", "12", "13"],
      correctIndex: 3
    },
    {
      id: "g_logic52",
      question: "Next: 2,3,5,8,12,17,?",
      options: ["21", "22", "23", "24"],
      correctIndex: 2
    },
    {
      id: "g_logic53",
      question: "Next: 1,2,6,24,120,?",
      options: ["240", "360", "720", "840"],
      correctIndex: 2
    },
    {
      id: "g_logic54",
      question: "Next: 2,5,11,23,47,?",
      options: ["91", "93", "95", "97"],
      correctIndex: 2
    },
    {
      id: "g_logic55",
      question: "Next: Z,W,S,N,H,?",
      options: ["A", "B", "C", "D"],
      correctIndex: 0
    },
    {
      id: "g_logic56",
      question: "Next: A,D,H,M,S,?",
      options: ["X", "Y", "Z", "W"],
      correctIndex: 1
    },
    {
      id: "g_logic57",
      question: "Alphabetical COMPUTER: 4th letter?",
      options: ["C", "E", "M", "O"],
      correctIndex: 2
    },
    {
      id: "g_logic58",
      question: "Alphabetical REASONING: 5th letter?",
      options: ["G", "I", "N", "O"],
      correctIndex: 1
    },
    {
      id: "g_logic59",
      question: "Which cannot be formed from ASSESSMENT?",
      options: ["MEAT", "SEAT", "TEST", "TEAM"],
      correctIndex: 3
    },
    {
      id: "g_logic60",
      question: "Remove vowels from EDUCATION:",
      options: ["DCTN", "EDCTN", "DCTIO", "UCA"],
      correctIndex: 0
    },
    {
      id: "g_logic61",
      question: "Facing west, turn 135° clockwise. Direction?",
      options: ["North-west", "North-east", "South-west", "South-east"],
      correctIndex: 1
    },
    {
      id: "g_logic62",
      question: "Facing south, turn 270° anticlockwise. Direction?",
      options: ["East", "West", "North", "South"],
      correctIndex: 0
    },
    {
      id: "g_logic63",
      question: "Yesterday was Sunday. Day after tomorrow?",
      options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      correctIndex: 2
    },
    {
      id: "g_logic64",
      question: "If 5th of month is Tuesday, 20th is:",
      options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      correctIndex: 1
    },
    {
      id: "g_logic65",
      question: "Which is both a square and cube?",
      options: ["36", "64", "81", "100"],
      correctIndex: 1
    },
    {
      id: "g_logic66",
      question: "Odd one: 121,144,169,196,225,250",
      options: ["121", "169", "225", "250"],
      correctIndex: 3
    },
    {
      id: "g_logic67",
      question: "All roses are flowers; no flower is metal. Therefore:",
      options: ["No rose is metal", "Some roses metal", "All metals roses", "Some flowers not roses"],
      correctIndex: 0
    },
    {
      id: "g_logic68",
      question: "Shift each letter to next alphabet: XYZ→",
      options: ["YZA", "YAB", "XZA", "ZAB"],
      correctIndex: 0
    },
    {
      id: "g_logic69",
      question: "If 2=6,3=12,4=20,5=30, then 7=?",
      options: ["42", "48", "56", "64"],
      correctIndex: 2
    },
    {
      id: "g_logic70",
      question: "30 people: 18 know Python, 15 Java, 8 both. At least one:",
      options: ["25", "26", "27", "28"],
      correctIndex: 2
    },
    {
      id: "g_logic71",
      question: "40 tea, 25 coffee, 10 both. Only tea:",
      options: ["15", "25", "30", "35"],
      correctIndex: 1
    },
    {
      id: "g_logic72",
      question: "n²+n for n=7:",
      options: ["49", "54", "56", "63"],
      correctIndex: 2
    },
    {
      id: "g_logic73",
      question: "All APIs are interfaces; some interfaces documented. Certain:",
      options: ["Some APIs documented", "All APIs documented", "All APIs interfaces", "No APIs documented"],
      correctIndex: 2
    },
    {
      id: "g_logic74",
      question: "P>Q>R>S. Definitely:",
      options: ["S>P", "P>S", "Q<S", "R>P"],
      correctIndex: 1
    },
    {
      id: "g_logic75",
      question: "A above C above E; B below D. Which could be top-to-bottom?",
      options: ["A-C-E-D-B", "D-B-A-C-E", "A-E-C-D-B", "C-A-E-D-B"],
      correctIndex: 1
    },
    {
      id: "g_logic76",
      question: "Next: 11,22,44,88,?",
      options: ["132", "154", "176", "180"],
      correctIndex: 2
    },
    {
      id: "g_logic77",
      question: "Next: 64,32,16,8,?",
      options: ["2", "4", "6", "7"],
      correctIndex: 1
    },
    {
      id: "g_logic78",
      question: "Some A are B. Necessarily:",
      options: ["At least one A is B", "All A are B", "No A is B", "All B are A"],
      correctIndex: 0
    },
    {
      id: "g_logic79",
      question: "Find the next term: 4, 9, 19, 39, 79, ?",
      options: ["149", "159", "169", "179"],
      correctIndex: 1
    },
    {
      id: "g_logic80",
      question: "If every engineer is a graduate and no graduate is a minor, which follows?",
      options: ["No engineer is a minor", "Some engineers are minors", "Every minor is an engineer", "No graduate is an engineer"],
      correctIndex: 0
    }
  ],
  "General Awareness": [
    {
      id: "g_aw1",
      question: "Which institution decides India's monetary policy?",
      options: ["SEBI", "RBI", "NITI Aayog", "Finance Commission"],
      correctIndex: 1
    },
    {
      id: "g_aw2",
      question: "Election Commission of India is a:",
      options: ["Statutory body", "Constitutional body", "Private body", "Executive company"],
      correctIndex: 1
    },
    {
      id: "g_aw3",
      question: "Article 14 deals with:",
      options: ["Equality before law", "Freedom of religion", "Right to life", "Constitutional remedies"],
      correctIndex: 0
    },
    {
      id: "g_aw4",
      question: "Fundamental Duties were added by which amendment?",
      options: ["24th", "42nd", "44th", "73rd"],
      correctIndex: 1
    },
    {
      id: "g_aw5",
      question: "Directive Principles are in which Part?",
      options: ["Part II", "Part III", "Part IV", "Part V"],
      correctIndex: 2
    },
    {
      id: "g_aw6",
      question: "Who appoints a state Governor?",
      options: ["Prime Minister", "President", "Chief Minister", "Chief Justice"],
      correctIndex: 1
    },
    {
      id: "g_aw7",
      question: "Rajya Sabha is the:",
      options: ["House of People", "Council of States", "Federal Assembly", "National Council"],
      correctIndex: 1
    },
    {
      id: "g_aw8",
      question: "Maximum constitutional strength of Lok Sabha:",
      options: ["545", "552", "560", "575"],
      correctIndex: 1
    },
    {
      id: "g_aw9",
      question: "Who audits Union and state government accounts?",
      options: ["CAG", "RBI", "UPSC", "SEBI"],
      correctIndex: 0
    },
    {
      id: "g_aw10",
      question: "GST is primarily a tax on:",
      options: ["Income", "Supply of goods and services", "Agricultural land", "Wealth only"],
      correctIndex: 1
    },
    {
      id: "g_aw11",
      question: "India's securities market regulator:",
      options: ["RBI", "SEBI", "IRDAI", "PFRDA"],
      correctIndex: 1
    },
    {
      id: "g_aw12",
      question: "GDP measures:",
      options: ["Final goods and services produced within an economy", "Only exports", "Only government spending", "Only agriculture"],
      correctIndex: 0
    },
    {
      id: "g_aw13",
      question: "Inflation is:",
      options: ["Sustained rise in general price level", "Fall in employment only", "Rise in exports only", "Fall in money supply only"],
      correctIndex: 0
    },
    {
      id: "g_aw14",
      question: "Which is a direct tax?",
      options: ["GST", "Customs duty", "Income tax", "Excise duty"],
      correctIndex: 2
    },
    {
      id: "g_aw15",
      question: "Which is a monetary-policy tool?",
      options: ["Repo rate", "GST rate", "Corporate tax", "Import quota"],
      correctIndex: 0
    },
    {
      id: "g_aw16",
      question: "Repo rate is the rate at which:",
      options: ["RBI lends short-term funds to banks against eligible securities", "Banks pay all savers", "Government taxes imports", "Companies issue shares"],
      correctIndex: 0
    },
    {
      id: "g_aw17",
      question: "Longest river in India by length within India:",
      options: ["Ganga", "Yamuna", "Godavari", "Narmada"],
      correctIndex: 0
    },
    {
      id: "g_aw18",
      question: "Western Ghats are also called:",
      options: ["Sahyadri", "Aravalli", "Shivalik", "Nilgiri"],
      correctIndex: 0
    },
    {
      id: "g_aw19",
      question: "Largest Indian state by area:",
      options: ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Uttar Pradesh"],
      correctIndex: 1
    },
    {
      id: "g_aw20",
      question: "Indian state with the longest coastline:",
      options: ["Tamil Nadu", "Gujarat", "Maharashtra", "Andhra Pradesh"],
      correctIndex: 1
    },
    {
      id: "g_aw21",
      question: "Tropic of Cancer crosses how many Indian states?",
      options: ["6", "7", "8", "9"],
      correctIndex: 2
    },
    {
      id: "g_aw22",
      question: "Soil associated strongly with cotton:",
      options: ["Black soil", "Laterite", "Alluvial", "Desert"],
      correctIndex: 0
    },
    {
      id: "g_aw23",
      question: "Most abundant gas in Earth's atmosphere:",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
      correctIndex: 1
    },
    {
      id: "g_aw24",
      question: "Ozone layer is mainly in the:",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      correctIndex: 1
    },
    {
      id: "g_aw25",
      question: "Conversion of atmospheric nitrogen into usable compounds is:",
      options: ["Nitrogen fixation", "Photosynthesis", "Transpiration", "Fermentation"],
      correctIndex: 0
    },
    {
      id: "g_aw26",
      question: "Powerhouse of the cell:",
      options: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Lysosome"],
      correctIndex: 1
    },
    {
      id: "g_aw27",
      question: "DNA primarily carries:",
      options: ["Genetic information", "Oxygen", "Hormones", "Digestive enzymes"],
      correctIndex: 0
    },
    {
      id: "g_aw28",
      question: "Vitamin synthesized in skin with sunlight:",
      options: ["A", "B12", "C", "D"],
      correctIndex: 3
    },
    {
      id: "g_aw29",
      question: "Cells primarily responsible for oxygen transport:",
      options: ["Platelets", "Red blood cells", "White blood cells", "Plasma cells"],
      correctIndex: 1
    },
    {
      id: "g_aw30",
      question: "Metal liquid at room temperature:",
      options: ["Iron", "Mercury", "Aluminium", "Copper"],
      correctIndex: 1
    },
    {
      id: "g_aw31",
      question: "Neutral pH at 25°C approximately:",
      options: ["0", "5", "7", "14"],
      correctIndex: 2
    },
    {
      id: "g_aw32",
      question: "Law relating gas pressure and volume at constant temperature:",
      options: ["Boyle's law", "Charles's law", "Ohm's law", "Faraday's law"],
      correctIndex: 0
    },
    {
      id: "g_aw33",
      question: "Theory of relativity was proposed by:",
      options: ["Newton", "Einstein", "Bohr", "Rutherford"],
      correctIndex: 1
    },
    {
      id: "g_aw34",
      question: "Negatively charged particle:",
      options: ["Proton", "Neutron", "Electron", "Photon"],
      correctIndex: 2
    },
    {
      id: "g_aw35",
      question: "SI unit of resistance:",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      correctIndex: 2
    },
    {
      id: "g_aw36",
      question: "India's main civilian space agency:",
      options: ["ISRO", "DRDO", "BARC", "HAL"],
      correctIndex: 0
    },
    {
      id: "g_aw37",
      question: "PSLV stands for:",
      options: ["Polar Satellite Launch Vehicle", "Public Satellite Launch Vehicle", "Polar Space Lift Vehicle", "Payload Satellite Launch Vehicle"],
      correctIndex: 0
    },
    {
      id: "g_aw38",
      question: "Largest planet by mass:",
      options: ["Earth", "Saturn", "Jupiter", "Neptune"],
      correctIndex: 2
    },
    {
      id: "g_aw39",
      question: "Planet famous for prominent rings:",
      options: ["Mars", "Venus", "Saturn", "Mercury"],
      correctIndex: 2
    },
    {
      id: "g_aw40",
      question: "First artificial satellite:",
      options: ["Apollo 11", "Sputnik 1", "Explorer 1", "Luna 2"],
      correctIndex: 1
    },
    {
      id: "g_aw41",
      question: "Harappan civilization is also called:",
      options: ["Indus Valley Civilization", "Vedic Civilization", "Mauryan Civilization", "Gupta Civilization"],
      correctIndex: 0
    },
    {
      id: "g_aw42",
      question: "Founder of Mauryan Empire:",
      options: ["Ashoka", "Chandragupta Maurya", "Samudragupta", "Harsha"],
      correctIndex: 1
    },
    {
      id: "g_aw43",
      question: "Battle of Plassey took place in:",
      options: ["1757", "1764", "1857", "1942"],
      correctIndex: 0
    },
    {
      id: "g_aw44",
      question: "Indian National Congress was founded in:",
      options: ["1885", "1905", "1919", "1947"],
      correctIndex: 0
    },
    {
      id: "g_aw45",
      question: "Quit India Movement launched in:",
      options: ["1930", "1942", "1947", "1950"],
      correctIndex: 1
    },
    {
      id: "g_aw46",
      question: "First President of independent India:",
      options: ["S. Radhakrishnan", "Rajendra Prasad", "Jawaharlal Nehru", "Vallabhbhai Patel"],
      correctIndex: 1
    },
    {
      id: "g_aw47",
      question: "Constitution came into force on:",
      options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1950"],
      correctIndex: 2
    },
    {
      id: "g_aw48",
      question: "Dandi March was associated with:",
      options: ["Non-Cooperation", "Civil Disobedience", "Quit India", "Swadeshi"],
      correctIndex: 1
    },
    {
      id: "g_aw49",
      question: "The Discovery of India was written by:",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Rabindranath Tagore"],
      correctIndex: 1
    },
    {
      id: "g_aw50",
      question: "Largest ocean:",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      correctIndex: 2
    },
    {
      id: "g_aw51",
      question: "Strait separating India and Sri Lanka:",
      options: ["Palk Strait", "Malacca Strait", "Bering Strait", "Hormuz Strait"],
      correctIndex: 0
    },
    {
      id: "g_aw52",
      question: "Equator passes through which continent?",
      options: ["Europe", "Africa", "Australia", "Antarctica"],
      correctIndex: 1
    },
    {
      id: "g_aw53",
      question: "Largest hot desert:",
      options: ["Gobi", "Sahara", "Kalahari", "Atacama"],
      correctIndex: 1
    },
    {
      id: "g_aw54",
      question: "Capital of Australia:",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctIndex: 2
    },
    {
      id: "g_aw55",
      question: "Organization headquartered in New York for international peace and cooperation:",
      options: ["UN", "WTO", "IMF", "ILO"],
      correctIndex: 0
    },
    {
      id: "g_aw56",
      question: "IMF headquarters:",
      options: ["Geneva", "Washington, D.C.", "New York", "Paris"],
      correctIndex: 1
    },
    {
      id: "g_aw57",
      question: "WTO stands for:",
      options: ["World Trade Organization", "World Transport Organization", "World Tariff Office", "World Tourism Organization"],
      correctIndex: 0
    },
    {
      id: "g_aw58",
      question: "Currency of Japan:",
      options: ["Yuan", "Yen", "Won", "Baht"],
      correctIndex: 1
    },
    {
      id: "g_aw59",
      question: "Largest continent by land area:",
      options: ["Africa", "Asia", "Europe", "North America"],
      correctIndex: 1
    },
    {
      id: "g_aw60",
      question: "Study of earthquakes:",
      options: ["Seismology", "Meteorology", "Ecology", "Hydrology"],
      correctIndex: 0
    },
    {
      id: "g_aw61",
      question: "Instrument measuring atmospheric pressure:",
      options: ["Barometer", "Hygrometer", "Anemometer", "Seismograph"],
      correctIndex: 0
    },
    {
      id: "g_aw62",
      question: "Instrument measuring wind speed:",
      options: ["Barometer", "Anemometer", "Thermometer", "Altimeter"],
      correctIndex: 1
    },
    {
      id: "g_aw63",
      question: "Major greenhouse gas from fossil-fuel combustion:",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
      correctIndex: 1
    },
    {
      id: "g_aw64",
      question: "Renewable energy using moving air:",
      options: ["Solar", "Wind", "Geothermal", "Tidal"],
      correctIndex: 1
    },
    {
      id: "g_aw65",
      question: "Photovoltaic cells are used for:",
      options: ["Solar power generation", "Wind turbines", "Hydroelectric dams", "Nuclear reactors"],
      correctIndex: 0
    },
    {
      id: "g_aw66",
      question: "Blockchain is fundamentally a:",
      options: ["Distributed ledger", "Centralized spreadsheet", "Search engine", "Operating system"],
      correctIndex: 0
    },
    {
      id: "g_aw67",
      question: "Field concerned with machines performing human-intelligence tasks:",
      options: ["Artificial intelligence", "Compiler design", "Accounting", "Typography"],
      correctIndex: 0
    },
    {
      id: "g_aw68",
      question: "Machine learning primarily:",
      options: ["Learns patterns from data", "Writes HTML only", "Replaces databases", "Raises monitor brightness"],
      correctIndex: 0
    },
    {
      id: "g_aw69",
      question: "Language widely used for data analysis and ML:",
      options: ["Python", "HTML", "CSS", "SQL only"],
      correctIndex: 0
    },
    {
      id: "g_aw70",
      question: "IoT stands for:",
      options: ["Internet of Things", "Integration of Technology", "Internet of Transactions", "Intelligent Online Transfer"],
      correctIndex: 0
    },
    {
      id: "g_aw71",
      question: "Cybersecurity principle ensuring authorized access when needed:",
      options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
      correctIndex: 2
    },
    {
      id: "g_aw72",
      question: "Phishing attempts to:",
      options: ["Trick users into revealing sensitive information", "Increase CPU speed", "Repair databases", "Improve Wi-Fi"],
      correctIndex: 0
    },
    {
      id: "g_aw73",
      question: "Two-factor authentication uses:",
      options: ["Two independent authentication factors", "Two passwords of same type", "Two usernames", "Two logins"],
      correctIndex: 0
    },
    {
      id: "g_aw74",
      question: "Secure web browsing commonly uses:",
      options: ["HTTPS", "HTTP", "FTP", "Telnet"],
      correctIndex: 0
    },
    {
      id: "g_aw75",
      question: "Classical dance form from Kerala:",
      options: ["Kathakali", "Kathak", "Odissi", "Bharatanatyam"],
      correctIndex: 0
    },
    {
      id: "g_aw76",
      question: "Language with the largest native-speaker population:",
      options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
      correctIndex: 1
    },
    {
      id: "g_aw77",
      question: "Nobel category not in Alfred Nobel's original will:",
      options: ["Physics", "Chemistry", "Economic Sciences", "Medicine"],
      correctIndex: 2
    },
    {
      id: "g_aw78",
      question: "Planet closest to Sun:",
      options: ["Venus", "Earth", "Mercury", "Mars"],
      correctIndex: 2
    },
    {
      id: "g_aw79",
      question: "Atomic number 1 belongs to:",
      options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
      correctIndex: 1
    },
    {
      id: "g_aw80",
      question: "Largest internal human organ:",
      options: ["Heart", "Liver", "Lung", "Kidney"],
      correctIndex: 1
    }
  ]
};
