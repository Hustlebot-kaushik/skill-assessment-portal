// Higher-level question bank — 400 questions, 5 categories × 80
// Compatible with the existing Skill Assessment Portal.

window.QUESTIONS_HIGHER = {
  "Basic Computers": [
    {
      id: "h_comp1",
      question: "Which algorithm finds a shortest path from one source with nonnegative edge weights?",
      options: ["Dijkstra", "Kruskal", "Prim", "DFS"],
      correctIndex: 0
    },
    {
      id: "h_comp2",
      question: "Which algorithm can handle negative edge weights in single-source shortest paths?",
      options: ["Bellman-Ford", "Dijkstra", "Prim", "Kruskal"],
      correctIndex: 0
    },
    {
      id: "h_comp3",
      question: "Which algorithm computes shortest paths between every pair of vertices?",
      options: ["Floyd-Warshall", "BFS", "Kruskal", "Prim"],
      correctIndex: 0
    },
    {
      id: "h_comp4",
      question: "Which algorithm builds an MST by repeatedly choosing the cheapest safe edge?",
      options: ["Kruskal", "Dijkstra", "Bellman-Ford", "DFS"],
      correctIndex: 0
    },
    {
      id: "h_comp5",
      question: "Which graph traversal normally uses a queue?",
      options: ["BFS", "DFS", "Prim", "Kruskal"],
      correctIndex: 0
    },
    {
      id: "h_comp6",
      question: "Which graph traversal commonly uses recursion or a stack?",
      options: ["DFS", "BFS", "Dijkstra", "Kruskal"],
      correctIndex: 0
    },
    {
      id: "h_comp7",
      question: "Which tree keeps its height balanced using rotations?",
      options: ["AVL tree", "Heap", "Trie", "B-tree"],
      correctIndex: 0
    },
    {
      id: "h_comp8",
      question: "Which structure is designed for efficient prefix lookup?",
      options: ["Trie", "Stack", "Queue", "Heap"],
      correctIndex: 0
    },
    {
      id: "h_comp9",
      question: "Which sorting algorithm guarantees O(n log n) worst-case time and is stable?",
      options: ["Merge sort", "Quicksort", "Selection sort", "Bubble sort"],
      correctIndex: 0
    },
    {
      id: "h_comp10",
      question: "Which sorting algorithm has average O(n log n) and is usually in-place?",
      options: ["Quicksort", "Merge sort", "Counting sort", "Radix sort"],
      correctIndex: 0
    },
    {
      id: "h_comp11",
      question: "Worst-case time of binary search on a sorted array?",
      options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
      correctIndex: 0
    },
    {
      id: "h_comp12",
      question: "Worst-case time of heap sort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correctIndex: 0
    },
    {
      id: "h_comp13",
      question: "What does Big-O describe?",
      options: ["Asymptotic growth of resource usage", "Exact runtime", "Source-code size", "CPU frequency"],
      correctIndex: 0
    },
    {
      id: "h_comp14",
      question: "Which SQL clause filters rows before grouping?",
      options: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"],
      correctIndex: 0
    },
    {
      id: "h_comp15",
      question: "Which SQL clause filters groups after aggregation?",
      options: ["HAVING", "WHERE", "ORDER BY", "DISTINCT"],
      correctIndex: 0
    },
    {
      id: "h_comp16",
      question: "Which SQL keyword removes duplicate result rows?",
      options: ["DISTINCT", "UNIQUE", "REMOVE", "DEDUP"],
      correctIndex: 0
    },
    {
      id: "h_comp17",
      question: "Which JOIN preserves every row from the left table?",
      options: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "RIGHT JOIN"],
      correctIndex: 0
    },
    {
      id: "h_comp18",
      question: "Which SQL constraint enforces a relationship to another table?",
      options: ["FOREIGN KEY", "CHECK", "DEFAULT", "UNIQUE"],
      correctIndex: 0
    },
    {
      id: "h_comp19",
      question: "Which normal form removes partial dependency on part of a composite key?",
      options: ["2NF", "1NF", "3NF", "BCNF"],
      correctIndex: 0
    },
    {
      id: "h_comp20",
      question: "Which normal form removes transitive dependency on a key?",
      options: ["3NF", "1NF", "2NF", "5NF"],
      correctIndex: 0
    },
    {
      id: "h_comp21",
      question: "Which ACID property means all-or-nothing execution?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      correctIndex: 0
    },
    {
      id: "h_comp22",
      question: "Which ACID property makes committed changes survive failures?",
      options: ["Durability", "Atomicity", "Isolation", "Consistency"],
      correctIndex: 0
    },
    {
      id: "h_comp23",
      question: "Which SQL command saves a transaction permanently?",
      options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "GRANT"],
      correctIndex: 0
    },
    {
      id: "h_comp24",
      question: "Which SQL command undoes uncommitted changes?",
      options: ["ROLLBACK", "COMMIT", "MERGE", "REVOKE"],
      correctIndex: 0
    },
    {
      id: "h_comp25",
      question: "Which database object runs automatically when a specified event occurs?",
      options: ["Trigger", "View", "Index", "Schema"],
      correctIndex: 0
    },
    {
      id: "h_comp26",
      question: "Which database object stores a reusable query definition?",
      options: ["View", "Trigger", "Cursor", "Sequence"],
      correctIndex: 0
    },
    {
      id: "h_comp27",
      question: "Which HTTP status means Not Found?",
      options: ["404", "401", "403", "500"],
      correctIndex: 0
    },
    {
      id: "h_comp28",
      question: "Which HTTP status means Unauthorized?",
      options: ["401", "404", "403", "500"],
      correctIndex: 0
    },
    {
      id: "h_comp29",
      question: "Which HTTP status means Forbidden?",
      options: ["403", "401", "404", "301"],
      correctIndex: 0
    },
    {
      id: "h_comp30",
      question: "Which HTTP status means Internal Server Error?",
      options: ["500", "400", "404", "502"],
      correctIndex: 0
    },
    {
      id: "h_comp31",
      question: "Which HTTP method is commonly used to retrieve a resource?",
      options: ["GET", "POST", "PATCH", "DELETE"],
      correctIndex: 0
    },
    {
      id: "h_comp32",
      question: "Which HTTP method is commonly used for partial updates?",
      options: ["PATCH", "GET", "HEAD", "OPTIONS"],
      correctIndex: 0
    },
    {
      id: "h_comp33",
      question: "Which protocol translates domain names into IP addresses?",
      options: ["DNS", "DHCP", "ARP", "ICMP"],
      correctIndex: 0
    },
    {
      id: "h_comp34",
      question: "Which protocol resolves an IPv4 address to a MAC address on a local network?",
      options: ["ARP", "DNS", "DHCP", "SMTP"],
      correctIndex: 0
    },
    {
      id: "h_comp35",
      question: "Which protocol dynamically assigns IP configuration?",
      options: ["DHCP", "DNS", "FTP", "SSH"],
      correctIndex: 0
    },
    {
      id: "h_comp36",
      question: "Which protocol provides secure remote shell access?",
      options: ["SSH", "Telnet", "FTP", "SMTP"],
      correctIndex: 0
    },
    {
      id: "h_comp37",
      question: "Which protocol is normally used to send email between mail servers?",
      options: ["SMTP", "IMAP", "POP3", "DNS"],
      correctIndex: 0
    },
    {
      id: "h_comp38",
      question: "Which protocol synchronizes email with a server while keeping messages server-side?",
      options: ["IMAP", "SMTP", "POP3", "FTP"],
      correctIndex: 0
    },
    {
      id: "h_comp39",
      question: "Which technology translates private IP addresses to public addresses?",
      options: ["NAT", "DNS", "ARP", "VLAN"],
      correctIndex: 0
    },
    {
      id: "h_comp40",
      question: "Which transport protocol is connection-oriented?",
      options: ["TCP", "UDP", "IP", "ICMP"],
      correctIndex: 0
    },
    {
      id: "h_comp41",
      question: "Which transport protocol is connectionless?",
      options: ["UDP", "TCP", "TLS", "HTTP"],
      correctIndex: 0
    },
    {
      id: "h_comp42",
      question: "Which IPv4 subnet mask corresponds to /24?",
      options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.128"],
      correctIndex: 0
    },
    {
      id: "h_comp43",
      question: "How many usable host addresses are available in a typical /26 subnet?",
      options: ["62", "64", "60", "126"],
      correctIndex: 0
    },
    {
      id: "h_comp44",
      question: "Which IP is private?",
      options: ["192.168.10.20", "8.8.8.8", "1.1.1.1", "203.0.113.5"],
      correctIndex: 0
    },
    {
      id: "h_comp45",
      question: "Which security principle gives users only required permissions?",
      options: ["Least privilege", "Open access", "Fail-open", "Maximum privilege"],
      correctIndex: 0
    },
    {
      id: "h_comp46",
      question: "Which attack injects malicious SQL through application input?",
      options: ["SQL injection", "XSS", "CSRF", "DDoS"],
      correctIndex: 0
    },
    {
      id: "h_comp47",
      question: "Which attack injects executable script into a webpage?",
      options: ["XSS", "SQL injection", "DDoS", "ARP spoofing"],
      correctIndex: 0
    },
    {
      id: "h_comp48",
      question: "Which attack causes a victim's browser to send an unwanted authenticated request?",
      options: ["CSRF", "XSS", "DDoS", "Port scanning"],
      correctIndex: 0
    },
    {
      id: "h_comp49",
      question: "Why is a salt added before password hashing?",
      options: ["To make precomputed hash attacks harder", "To make hashes reversible", "To shorten passwords", "To replace encryption"],
      correctIndex: 0
    },
    {
      id: "h_comp50",
      question: "Which cryptography uses a shared secret key?",
      options: ["Symmetric", "Asymmetric", "Hashing", "Encoding"],
      correctIndex: 0
    },
    {
      id: "h_comp51",
      question: "Which cryptography uses a public/private key pair?",
      options: ["Asymmetric", "Symmetric", "Hashing", "Compression"],
      correctIndex: 0
    },
    {
      id: "h_comp52",
      question: "What is a cryptographic hash intended to provide?",
      options: ["One-way mapping with strong collision resistance", "Reversible encryption", "Guaranteed unique outputs", "Lossless compression"],
      correctIndex: 0
    },
    {
      id: "h_comp53",
      question: "Which cloud model provides virtual machines and networks?",
      options: ["IaaS", "PaaS", "SaaS", "DaaS"],
      correctIndex: 0
    },
    {
      id: "h_comp54",
      question: "Which cloud model provides a managed application platform?",
      options: ["PaaS", "IaaS", "SaaS", "LAN"],
      correctIndex: 0
    },
    {
      id: "h_comp55",
      question: "Which cloud model delivers complete applications?",
      options: ["SaaS", "PaaS", "IaaS", "Bare metal"],
      correctIndex: 0
    },
    {
      id: "h_comp56",
      question: "What is cloud elasticity?",
      options: ["Automatic adjustment of resources to demand", "Permanent maximum capacity", "Data encryption", "Manual deployment"],
      correctIndex: 0
    },
    {
      id: "h_comp57",
      question: "What is a Docker image?",
      options: ["A packaged template used to create containers", "A running process", "A physical server", "A database table"],
      correctIndex: 0
    },
    {
      id: "h_comp58",
      question: "What is a Docker container?",
      options: ["A running isolated instance of an image", "A Git branch", "A DNS record", "A database index"],
      correctIndex: 0
    },
    {
      id: "h_comp59",
      question: "Which platform orchestrates containers at scale?",
      options: ["Kubernetes", "Git", "SQLite", "Redis"],
      correctIndex: 0
    },
    {
      id: "h_comp60",
      question: "Which Git command creates a commit?",
      options: ["git commit", "git push", "git fetch", "git clone"],
      correctIndex: 0
    },
    {
      id: "h_comp61",
      question: "Which Git command sends local commits to a remote repository?",
      options: ["git push", "git pull", "git clone", "git stash"],
      correctIndex: 0
    },
    {
      id: "h_comp62",
      question: "Which Git command downloads remote changes without integrating them?",
      options: ["git fetch", "git pull", "git merge", "git reset"],
      correctIndex: 0
    },
    {
      id: "h_comp63",
      question: "Which Git command temporarily stores uncommitted changes?",
      options: ["git stash", "git tag", "git log", "git branch"],
      correctIndex: 0
    },
    {
      id: "h_comp64",
      question: "What is a race condition?",
      options: ["A result that depends on concurrent execution timing", "A failed network cable", "A sorting error", "A database schema"],
      correctIndex: 0
    },
    {
      id: "h_comp65",
      question: "What does a mutex protect?",
      options: ["A critical section from concurrent access", "A DNS zone", "A disk partition", "A Git branch"],
      correctIndex: 0
    },
    {
      id: "h_comp66",
      question: "What is deadlock?",
      options: ["Processes wait indefinitely for resources held by one another", "A process finishes normally", "A cache miss", "A syntax error"],
      correctIndex: 0
    },
    {
      id: "h_comp67",
      question: "Which CPU scheduling algorithm uses a time quantum?",
      options: ["Round Robin", "FCFS", "SJF", "FIFO paging"],
      correctIndex: 0
    },
    {
      id: "h_comp68",
      question: "Which scheduling algorithm selects the shortest estimated CPU burst?",
      options: ["SJF", "Round Robin", "FCFS", "SCAN"],
      correctIndex: 0
    },
    {
      id: "h_comp69",
      question: "Which memory is volatile?",
      options: ["RAM", "SSD", "ROM", "Flash"],
      correctIndex: 0
    },
    {
      id: "h_comp70",
      question: "Which OS component manages hardware resources and processes?",
      options: ["Kernel", "Browser", "Compiler", "Text editor"],
      correctIndex: 0
    },
    {
      id: "h_comp71",
      question: "Which technique divides virtual memory into fixed-size pages?",
      options: ["Paging", "Segmentation only", "Spooling", "Caching"],
      correctIndex: 0
    },
    {
      id: "h_comp72",
      question: "Which OOP concept hides implementation details?",
      options: ["Abstraction", "Inheritance", "Iteration", "Indexing"],
      correctIndex: 0
    },
    {
      id: "h_comp73",
      question: "Which OOP concept allows one interface to have different implementations?",
      options: ["Polymorphism", "Normalization", "Compilation", "Hashing"],
      correctIndex: 0
    },
    {
      id: "h_comp74",
      question: "Which principle says a class should have one reason to change?",
      options: ["Single Responsibility Principle", "Open/Closed Principle", "Liskov Principle", "Dependency Inversion"],
      correctIndex: 0
    },
    {
      id: "h_comp75",
      question: "Which design pattern notifies subscribed objects about state changes?",
      options: ["Observer", "Singleton", "Adapter", "Builder"],
      correctIndex: 0
    },
    {
      id: "h_comp76",
      question: "Which test checks individual functions or classes?",
      options: ["Unit testing", "Integration testing", "Load testing", "Acceptance testing"],
      correctIndex: 0
    },
    {
      id: "h_comp77",
      question: "Which test checks interactions between modules?",
      options: ["Integration testing", "Unit testing", "Load testing", "Smoke testing"],
      correctIndex: 0
    },
    {
      id: "h_comp78",
      question: "Which practice automatically builds and tests code after changes?",
      options: ["Continuous integration", "Manual deployment", "Disk formatting", "Port forwarding"],
      correctIndex: 0
    },
    {
      id: "h_comp79",
      question: "Which principle requires software modules to be open for extension but closed for modification?",
      options: ["Open/Closed Principle", "Single Responsibility Principle", "Dependency Inversion", "Interface Segregation"],
      correctIndex: 0
    },
    {
      id: "h_comp80",
      question: "Which protocol is commonly used to securely transfer web data?",
      options: ["HTTPS", "HTTP", "FTP", "Telnet"],
      correctIndex: 0
    }
  ],
  "English": [
    {
      id: "h_eng1",
      question: "Choose the correct sentence.",
      options: ["The committee has reached its decision.", "The committee have reached its decision.", "The committee are reached its decision.", "The committee were reach its decision."],
      correctIndex: 0
    },
    {
      id: "h_eng2",
      question: "Choose the correct sentence.",
      options: ["Neither the proposal nor the alternatives are feasible.", "Neither the proposal nor the alternatives is feasible.", "Neither the proposal nor the alternatives was feasible.", "Neither the proposal nor the alternatives has feasible."],
      correctIndex: 0
    },
    {
      id: "h_eng3",
      question: "Choose the correct sentence.",
      options: ["Each of the participants was given a certificate.", "Each of the participants were given a certificate.", "Each participants was given a certificate.", "Each of the participant were given a certificate."],
      correctIndex: 0
    },
    {
      id: "h_eng4",
      question: "Choose the correct sentence.",
      options: ["A number of issues were identified.", "A number of issues was identified.", "A number of issues is identified.", "A number of issues has identified."],
      correctIndex: 0
    },
    {
      id: "h_eng5",
      question: "Choose the correct sentence.",
      options: ["The number of issues has increased.", "The number of issues have increased.", "The number of issues are increased.", "The number of issues were increased."],
      correctIndex: 0
    },
    {
      id: "h_eng6",
      question: "Choose the correct conditional.",
      options: ["If I were you, I would reconsider.", "If I was you, I will reconsider.", "If I am you, I would reconsider.", "If I were you, I will reconsider."],
      correctIndex: 0
    },
    {
      id: "h_eng7",
      question: "Choose the correct conditional.",
      options: ["Had they prepared earlier, they would have succeeded.", "Had they prepared earlier, they will succeed.", "Had they prepare earlier, they would succeed.", "Had they prepared earlier, they would succeeded."],
      correctIndex: 0
    },
    {
      id: "h_eng8",
      question: "Choose the correct reported speech.",
      options: ["She said that she had completed the task.", "She said that she has completed the task.", "She said that I had completed the task.", "She says that she had complete the task."],
      correctIndex: 0
    },
    {
      id: "h_eng9",
      question: "Choose the correct passive construction.",
      options: ["The system was tested before release.", "The system tested before release.", "The system was testing before release.", "The system has test before release."],
      correctIndex: 0
    },
    {
      id: "h_eng10",
      question: "Choose the correct relative pronoun.",
      options: ["The scientist whose research was cited received the award.", "The scientist which research was cited received the award.", "The scientist whom research was cited received the award.", "The scientist where research was cited received the award."],
      correctIndex: 0
    },
    {
      id: "h_eng11",
      question: "Choose the correct preposition.",
      options: ["The results are consistent with the hypothesis.", "The results are consistent to the hypothesis.", "The results are consistent for the hypothesis.", "The results are consistent at the hypothesis."],
      correctIndex: 0
    },
    {
      id: "h_eng12",
      question: "Choose the correct phrase.",
      options: ["She is proficient in Python.", "She is proficient on Python.", "She is proficient for Python.", "She is proficient by Python."],
      correctIndex: 0
    },
    {
      id: "h_eng13",
      question: "Choose the correct phrase.",
      options: ["We look forward to hearing from you.", "We look forward to hear from you.", "We look forward hearing from you.", "We look forward for hearing from you."],
      correctIndex: 0
    },
    {
      id: "h_eng14",
      question: "Choose the correct phrase.",
      options: ["He insisted on staying.", "He insisted to stay.", "He insisted for staying.", "He insisted stay."],
      correctIndex: 0
    },
    {
      id: "h_eng15",
      question: "Choose the correct phrase.",
      options: ["We discussed the proposal.", "We discussed about the proposal.", "We discussed on the proposal.", "We discussed regarding about the proposal."],
      correctIndex: 0
    },
    {
      id: "h_eng16",
      question: "Meaning of 'cogent':",
      options: ["Clear and convincing", "Uncertain and vague", "Harmful", "Temporary"],
      correctIndex: 0
    },
    {
      id: "h_eng17",
      question: "Meaning of 'deleterious':",
      options: ["Harmful", "Helpful", "Neutral", "Permanent"],
      correctIndex: 0
    },
    {
      id: "h_eng18",
      question: "Meaning of 'equivocal':",
      options: ["Open to more than one interpretation", "Completely certain", "Highly detailed", "Very concise"],
      correctIndex: 0
    },
    {
      id: "h_eng19",
      question: "Meaning of 'scrutinize':",
      options: ["Examine carefully", "Ignore", "Summarize", "Approve"],
      correctIndex: 0
    },
    {
      id: "h_eng20",
      question: "Meaning of 'mitigate':",
      options: ["Reduce severity", "Increase severity", "Predict exactly", "Duplicate"],
      correctIndex: 0
    },
    {
      id: "h_eng21",
      question: "Choose the correct spelling.",
      options: ["Conscientious", "Consciencious", "Conscientous", "Conscentious"],
      correctIndex: 0
    },
    {
      id: "h_eng22",
      question: "Choose the correct spelling.",
      options: ["Maintenance", "Maintainance", "Maintenence", "Maintanance"],
      correctIndex: 0
    },
    {
      id: "h_eng23",
      question: "Choose the correct spelling.",
      options: ["Entrepreneur", "Enterpreneur", "Entreprenuer", "Entreprenur"],
      correctIndex: 0
    },
    {
      id: "h_eng24",
      question: "Choose the correct spelling.",
      options: ["Occurrence", "Occurence", "Occurrance", "Ocurrence"],
      correctIndex: 0
    },
    {
      id: "h_eng25",
      question: "Choose the correct spelling.",
      options: ["Privilege", "Priviledge", "Privelege", "Privillage"],
      correctIndex: 0
    },
    {
      id: "h_eng26",
      question: "Choose the correct spelling.",
      options: ["Questionnaire", "Questionaire", "Questionnair", "Questionairee"],
      correctIndex: 0
    },
    {
      id: "h_eng27",
      question: "Choose the correct spelling.",
      options: ["Accommodate", "Acommodate", "Accomodate", "Acommmodate"],
      correctIndex: 0
    },
    {
      id: "h_eng28",
      question: "Choose the correct spelling.",
      options: ["Separate", "Seperate", "Seperrate", "Separete"],
      correctIndex: 0
    },
    {
      id: "h_eng29",
      question: "Choose the best transition for contrast.",
      options: ["Nevertheless", "Therefore", "Similarly", "Consequently"],
      correctIndex: 0
    },
    {
      id: "h_eng30",
      question: "Choose the best transition for result.",
      options: ["Consequently", "Although", "Whereas", "Despite"],
      correctIndex: 0
    },
    {
      id: "h_eng31",
      question: "Choose the best transition for addition.",
      options: ["Furthermore", "However", "Conversely", "Otherwise"],
      correctIndex: 0
    },
    {
      id: "h_eng32",
      question: "Choose the best transition for concession.",
      options: ["Although", "Therefore", "Similarly", "Consequently"],
      correctIndex: 0
    },
    {
      id: "h_eng33",
      question: "Choose the best academic wording.",
      options: ["The findings indicate a significant association.", "The findings are totally amazing.", "The findings prove everything.", "The findings obviously show all causes."],
      correctIndex: 0
    },
    {
      id: "h_eng34",
      question: "Choose the most concise sentence.",
      options: ["Because the test failed, we repeated it.", "Due to the fact that the test failed, we repeated it.", "Owing to the failure fact, the test was repeated by us.", "The test having failed was the reason why it was repeated."],
      correctIndex: 0
    },
    {
      id: "h_eng35",
      question: "Choose the best formal opening.",
      options: ["Dear Hiring Manager,", "Hey bro,", "Hi dude,", "Yo team,"],
      correctIndex: 0
    },
    {
      id: "h_eng36",
      question: "Choose the best formal closing.",
      options: ["Kind regards,", "See ya,", "Bye bro,", "Catch you later,"],
      correctIndex: 0
    },
    {
      id: "h_eng37",
      question: "Synonym of 'abate':",
      options: ["Diminish", "Intensify", "Repeat", "Clarify"],
      correctIndex: 0
    },
    {
      id: "h_eng38",
      question: "Synonym of 'meticulous':",
      options: ["Careful and precise", "Careless", "Rapid", "Vague"],
      correctIndex: 0
    },
    {
      id: "h_eng39",
      question: "Antonym of 'transient':",
      options: ["Permanent", "Brief", "Temporary", "Short-lived"],
      correctIndex: 0
    },
    {
      id: "h_eng40",
      question: "Antonym of 'explicit':",
      options: ["Implicit", "Direct", "Detailed", "Obvious"],
      correctIndex: 0
    },
    {
      id: "h_eng41",
      question: "Meaning of 'resilient':",
      options: ["Able to recover from difficulty", "Unable to change", "Easily broken", "Always predictable"],
      correctIndex: 0
    },
    {
      id: "h_eng42",
      question: "Meaning of 'viable':",
      options: ["Capable of working or succeeding", "Impossible", "Outdated", "Unrelated"],
      correctIndex: 0
    },
    {
      id: "h_eng43",
      question: "Meaning of 'nuance':",
      options: ["A subtle distinction", "A numerical error", "A major contradiction", "A legal prohibition"],
      correctIndex: 0
    },
    {
      id: "h_eng44",
      question: "Meaning of 'corroborate':",
      options: ["Confirm with additional evidence", "Disprove automatically", "Hide evidence", "Translate literally"],
      correctIndex: 0
    },
    {
      id: "h_eng45",
      question: "Meaning of 'salient':",
      options: ["Most noticeable or important", "Least relevant", "Temporary", "Uncertain"],
      correctIndex: 0
    },
    {
      id: "h_eng46",
      question: "Meaning of 'intransigent':",
      options: ["Unwilling to change position", "Highly flexible", "Generous", "Indecisive"],
      correctIndex: 0
    },
    {
      id: "h_eng47",
      question: "Choose the correct sentence.",
      options: ["Not only did she solve the problem, but she also documented it.", "Not only she solved the problem, but she documented it.", "Not only did she solved the problem, but she documented it.", "Not only she did solve the problem, but also documented it."],
      correctIndex: 0
    },
    {
      id: "h_eng48",
      question: "Choose the correct sentence.",
      options: ["Rarely have we seen such rapid growth.", "Rarely we have seen such rapid growth.", "Rarely did we saw such rapid growth.", "Rarely have we saw such rapid growth."],
      correctIndex: 0
    },
    {
      id: "h_eng49",
      question: "Choose the correct sentence.",
      options: ["No sooner had he arrived than the meeting began.", "No sooner he had arrived than the meeting began.", "No sooner did he arrived than the meeting began.", "No sooner had he arrive than the meeting began."],
      correctIndex: 0
    },
    {
      id: "h_eng50",
      question: "Choose the correct sentence.",
      options: ["Hardly had I reached home when it started raining.", "Hardly I had reached home when it started raining.", "Hardly had I reached home than it started raining.", "Hardly did I reached home when it started raining."],
      correctIndex: 0
    },
    {
      id: "h_eng51",
      question: "Choose the correct tense.",
      options: ["By next June, she will have completed the course.", "By next June, she completed the course.", "By next June, she has completed the course.", "By next June, she had completed the course."],
      correctIndex: 0
    },
    {
      id: "h_eng52",
      question: "Choose the correct tense.",
      options: ["When I arrived, they had already left.", "When I arrived, they have already left.", "When I arrived, they will leave.", "When I arrived, they leave."],
      correctIndex: 0
    },
    {
      id: "h_eng53",
      question: "Choose the correct modal.",
      options: ["The result may be due to measurement error.", "The result mustn't be due to measurement error.", "The result shall not be due to measurement error.", "The result would not be due to measurement error."],
      correctIndex: 0
    },
    {
      id: "h_eng54",
      question: "Choose the best word.",
      options: ["The evidence was inconclusive.", "The evidence was conclusive when no data existed.", "The evidence was definitive despite contradiction.", "The evidence was irrefutable despite no experiment."],
      correctIndex: 0
    },
    {
      id: "h_eng55",
      question: "Choose the correct use of 'affect'.",
      options: ["The policy may affect productivity.", "The policy may effect productivity.", "The policy may affects productivity.", "The policy may affected productivity."],
      correctIndex: 0
    },
    {
      id: "h_eng56",
      question: "Choose the correct use of 'effect'.",
      options: ["The effect was significant.", "The affect was significant.", "The effects was significant.", "The effecting was significant."],
      correctIndex: 0
    },
    {
      id: "h_eng57",
      question: "Choose the correct use of 'principle'.",
      options: ["The principle behind the method is sound.", "The principal behind the method is sound.", "The principally behind the method is sound.", "The principled behind the method is sound."],
      correctIndex: 0
    },
    {
      id: "h_eng58",
      question: "Choose the correct use of 'complement'.",
      options: ["The two skills complement each other.", "The two skills compliment each other.", "The two skills complements each other.", "The two skills complement each others."],
      correctIndex: 0
    },
    {
      id: "h_eng59",
      question: "Choose the correct sentence.",
      options: ["The data suggest a relationship.", "The data suggests a relationship.", "The datas suggest a relationship.", "The data suggesting a relationship."],
      correctIndex: 0
    },
    {
      id: "h_eng60",
      question: "Choose the correct sentence.",
      options: ["The criteria are clearly defined.", "The criteria is clearly defined.", "The criterias are clearly defined.", "The criterion are clearly defined."],
      correctIndex: 0
    },
    {
      id: "h_eng61",
      question: "Choose the correct sentence.",
      options: ["The phenomenon has been observed before.", "The phenomena has been observed before.", "The phenomenon have been observed before.", "These phenomenon has been observed before."],
      correctIndex: 0
    },
    {
      id: "h_eng62",
      question: "Choose the correct sentence.",
      options: ["There are fewer errors in the new version.", "There are less errors in the new version.", "There is fewer errors in the new version.", "There are fewest errors in the new version."],
      correctIndex: 0
    },
    {
      id: "h_eng63",
      question: "Choose the correct sentence.",
      options: ["It is essential that every applicant submit the form.", "It is essential that every applicant submits the form.", "It is essential every applicant submitted the form.", "It is essential that every applicant submitting the form."],
      correctIndex: 0
    },
    {
      id: "h_eng64",
      question: "Choose the correct sentence.",
      options: ["He recommended that the team investigate further.", "He recommended the team to investigate further.", "He recommended that the team investigates further.", "He recommended that the team investigated further."],
      correctIndex: 0
    },
    {
      id: "h_eng65",
      question: "Choose the correct sentence.",
      options: ["Having reviewed the data, the researchers revised the model.", "Having reviewed the data, the model revised the researchers.", "Having reviewing the data, the researchers revised the model.", "Reviewed the data, the model was revised the researchers."],
      correctIndex: 0
    },
    {
      id: "h_eng66",
      question: "Choose the correct sentence.",
      options: ["The report needs to be revised.", "The report needs revised.", "The report needs to revised.", "The report need to be revised."],
      correctIndex: 0
    },
    {
      id: "h_eng67",
      question: "Choose the correct sentence.",
      options: ["Despite the delay, the project was completed.", "Despite of the delay, the project was completed.", "Despite the project was delayed, it was completed.", "Despite delaying, the project was completed."],
      correctIndex: 0
    },
    {
      id: "h_eng68",
      question: "Choose the correct sentence.",
      options: ["Although the data were incomplete, the analysis continued.", "Although of the incomplete data, the analysis continued.", "Although the data incomplete, the analysis continued.", "Although of data being incomplete, the analysis continued."],
      correctIndex: 0
    },
    {
      id: "h_eng69",
      question: "Choose the best word: The proposal is economically ___.",
      options: ["viable", "obsolete", "ambiguous", "incidental"],
      correctIndex: 0
    },
    {
      id: "h_eng70",
      question: "Choose the best word: The study seeks to ___ the cause.",
      options: ["elucidate", "obscure", "neglect", "distort"],
      correctIndex: 0
    },
    {
      id: "h_eng71",
      question: "Choose the best word: The two accounts are ___.",
      options: ["inconsistent", "identical", "redundant", "fragile"],
      correctIndex: 0
    },
    {
      id: "h_eng72",
      question: "Choose the best word: The instructions were ___.",
      options: ["ambiguous", "precise", "explicit", "unambiguous"],
      correctIndex: 0
    },
    {
      id: "h_eng73",
      question: "Choose the best word: The report provides a ___ analysis.",
      options: ["comprehensive", "careless", "random", "irrelevant"],
      correctIndex: 0
    },
    {
      id: "h_eng74",
      question: "Choose the best word: The result was ___ with prior evidence.",
      options: ["consistent", "fragile", "obsolete", "scarce"],
      correctIndex: 0
    },
    {
      id: "h_eng75",
      question: "Choose the correct sentence.",
      options: ["Neither explanation is satisfactory.", "Neither explanations are satisfactory.", "Neither explanation are satisfactory.", "Neither of explanation is satisfactory."],
      correctIndex: 0
    },
    {
      id: "h_eng76",
      question: "Choose the correct sentence.",
      options: ["A large amount of information was collected.", "A large number of information was collected.", "Large amount of informations were collected.", "A large amounts of information were collected."],
      correctIndex: 0
    },
    {
      id: "h_eng77",
      question: "Choose the correct sentence.",
      options: ["News is spreading quickly.", "News are spreading quickly.", "News were spreading quickly.", "News have spread quickly."],
      correctIndex: 0
    },
    {
      id: "h_eng78",
      question: "Choose the correct sentence.",
      options: ["The results were consistent with the hypothesis.", "The results were consistent to the hypothesis.", "The results were consistent for the hypothesis.", "The results were consistent at the hypothesis."],
      correctIndex: 0
    },
    {
      id: "h_eng79",
      question: "Choose the correct sentence.",
      options: ["Although the data were incomplete, the analysis continued.", "Although of the data were incomplete, the analysis continued.", "Although the data incomplete, the analysis continued.", "Although of data being incomplete, the analysis continued."],
      correctIndex: 0
    },
    {
      id: "h_eng80",
      question: "Choose the correct sentence.",
      options: ["Despite the delay, the project was completed.", "Despite of the delay, the project was completed.", "Despite the project was delayed, it was completed.", "Despite delaying, the project was completed."],
      correctIndex: 0
    }
  ],
  "Aptitude": [
    {
      id: "h_math1",
      question: "A number increases from 240 to 300. Percentage increase?",
      options: ["25%", "20%", "30%", "15%"],
      correctIndex: 0
    },
    {
      id: "h_math2",
      question: "A number decreases from 500 to 425. Percentage decrease?",
      options: ["15%", "10%", "12.5%", "20%"],
      correctIndex: 0
    },
    {
      id: "h_math3",
      question: "An article marked ₹2,400 gets a 12.5% discount. Selling price?",
      options: ["₹2,100", "₹2,050", "₹2,150", "₹2,200"],
      correctIndex: 0
    },
    {
      id: "h_math4",
      question: "An article bought for ₹1,250 is sold for ₹1,500. Profit percentage?",
      options: ["20%", "15%", "25%", "30%"],
      correctIndex: 0
    },
    {
      id: "h_math5",
      question: "An article sold for ₹765 gives a 15% loss. Cost price?",
      options: ["₹900", "₹850", "₹875", "₹950"],
      correctIndex: 0
    },
    {
      id: "h_math6",
      question: "If 35% of x is 140, x equals:",
      options: ["400", "350", "450", "500"],
      correctIndex: 0
    },
    {
      id: "h_math7",
      question: "If 3x+5=32, x equals:",
      options: ["9", "8", "10", "7"],
      correctIndex: 0
    },
    {
      id: "h_math8",
      question: "If 5x−12=38, x equals:",
      options: ["10", "8", "12", "14"],
      correctIndex: 0
    },
    {
      id: "h_math9",
      question: "If x/6=11, x equals:",
      options: ["66", "60", "72", "77"],
      correctIndex: 0
    },
    {
      id: "h_math10",
      question: "If 2x+3y=24 and x=6, y equals:",
      options: ["4", "3", "5", "6"],
      correctIndex: 0
    },
    {
      id: "h_math11",
      question: "The ratio 18:30 in simplest form is:",
      options: ["3:5", "2:5", "5:3", "6:10"],
      correctIndex: 0
    },
    {
      id: "h_math12",
      question: "If a:b=7:9 and a=35, b equals:",
      options: ["45", "40", "49", "54"],
      correctIndex: 0
    },
    {
      id: "h_math13",
      question: "If a:b=4:7 and b:c=14:15, a:c equals:",
      options: ["8:15", "4:15", "8:21", "14:15"],
      correctIndex: 0
    },
    {
      id: "h_math14",
      question: "Average of 14, 18, 22, 26, 30 is:",
      options: ["22", "20", "21", "24"],
      correctIndex: 0
    },
    {
      id: "h_math15",
      question: "Average of 7 numbers is 18. Their sum is:",
      options: ["126", "108", "119", "144"],
      correctIndex: 0
    },
    {
      id: "h_math16",
      question: "Average of 5 numbers is 24. Four are 18,20,25,27. Fifth is:",
      options: ["30", "28", "32", "26"],
      correctIndex: 0
    },
    {
      id: "h_math17",
      question: "A car covers 270 km in 4.5 hours. Speed?",
      options: ["60 km/h", "55 km/h", "65 km/h", "70 km/h"],
      correctIndex: 0
    },
    {
      id: "h_math18",
      question: "A 180 m train passes a pole in 9 s. Speed?",
      options: ["20 m/s", "18 m/s", "22 m/s", "24 m/s"],
      correctIndex: 0
    },
    {
      id: "h_math19",
      question: "90 km/h equals:",
      options: ["25 m/s", "20 m/s", "30 m/s", "18 m/s"],
      correctIndex: 0
    },
    {
      id: "h_math20",
      question: "A person travels 120 km at 40 km/h. Time?",
      options: ["3 h", "2 h", "4 h", "5 h"],
      correctIndex: 0
    },
    {
      id: "h_math21",
      question: "A can do a job in 15 days, B in 10 days. Together?",
      options: ["6 days", "5 days", "7 days", "8 days"],
      correctIndex: 0
    },
    {
      id: "h_math22",
      question: "A can do a job in 20 days, B in 30 days. Together?",
      options: ["12 days", "10 days", "15 days", "18 days"],
      correctIndex: 0
    },
    {
      id: "h_math23",
      question: "Three workers complete a job in 24 days. Six workers take:",
      options: ["12 days", "8 days", "16 days", "18 days"],
      correctIndex: 0
    },
    {
      id: "h_math24",
      question: "A pipe fills a tank in 12 h. In 3 h it fills:",
      options: ["1/4", "1/3", "1/6", "1/2"],
      correctIndex: 0
    },
    {
      id: "h_math25",
      question: "Two pipes fill a tank in 12 h and 18 h. Together time?",
      options: ["7.2 h", "6 h", "8 h", "9 h"],
      correctIndex: 0
    },
    {
      id: "h_math26",
      question: "SI on ₹6,000 at 9% for 2 years?",
      options: ["₹1,080", "₹900", "₹1,200", "₹1,180"],
      correctIndex: 0
    },
    {
      id: "h_math27",
      question: "SI on ₹7,500 at 8% for 3 years?",
      options: ["₹1,800", "₹1,500", "₹2,000", "₹1,200"],
      correctIndex: 0
    },
    {
      id: "h_math28",
      question: "Amount on ₹5,000 at 10% compound annually for 2 years?",
      options: ["₹6,050", "₹6,000", "₹6,100", "₹6,250"],
      correctIndex: 0
    },
    {
      id: "h_math29",
      question: "CI on ₹4,000 at 5% annually for 2 years?",
      options: ["₹410", "₹400", "₹420", "₹450"],
      correctIndex: 0
    },
    {
      id: "h_math30",
      question: "A sum doubles in 8 years at simple interest. Rate per year?",
      options: ["12.5%", "10%", "15%", "8%"],
      correctIndex: 0
    },
    {
      id: "h_math31",
      question: "HCF of 72 and 108?",
      options: ["36", "18", "24", "12"],
      correctIndex: 0
    },
    {
      id: "h_math32",
      question: "LCM of 16 and 24?",
      options: ["48", "32", "64", "96"],
      correctIndex: 0
    },
    {
      id: "h_math33",
      question: "LCM of 18, 24 and 30?",
      options: ["360", "180", "240", "720"],
      correctIndex: 0
    },
    {
      id: "h_math34",
      question: "Remainder when 839 is divided by 11?",
      options: ["3", "4", "5", "6"],
      correctIndex: 0
    },
    {
      id: "h_math35",
      question: "Smallest number divisible by 9, 12 and 15?",
      options: ["180", "90", "120", "360"],
      correctIndex: 0
    },
    {
      id: "h_math36",
      question: "Next term: 3, 8, 15, 24, 35, ?",
      options: ["48", "46", "49", "50"],
      correctIndex: 0
    },
    {
      id: "h_math37",
      question: "Next term: 2, 6, 18, 54, ?",
      options: ["162", "108", "144", "216"],
      correctIndex: 0
    },
    {
      id: "h_math38",
      question: "Next term: 1, 4, 9, 16, 25, ?",
      options: ["36", "30", "42", "49"],
      correctIndex: 0
    },
    {
      id: "h_math39",
      question: "Next term: 5, 11, 23, 47, ?",
      options: ["95", "94", "96", "99"],
      correctIndex: 0
    },
    {
      id: "h_math40",
      question: "Rectangle length 18 cm, width 12 cm. Area?",
      options: ["216 cm²", "180 cm²", "240 cm²", "360 cm²"],
      correctIndex: 0
    },
    {
      id: "h_math41",
      question: "Rectangle perimeter 70 cm, length 20 cm. Width?",
      options: ["15 cm", "10 cm", "12 cm", "20 cm"],
      correctIndex: 0
    },
    {
      id: "h_math42",
      question: "Circle radius 7 cm, π=22/7. Area?",
      options: ["154 cm²", "44 cm²", "308 cm²", "49 cm²"],
      correctIndex: 0
    },
    {
      id: "h_math43",
      question: "Triangle base 16 cm, height 10 cm. Area?",
      options: ["80 cm²", "160 cm²", "60 cm²", "100 cm²"],
      correctIndex: 0
    },
    {
      id: "h_math44",
      question: "A square has perimeter 52 cm. Side?",
      options: ["13 cm", "12 cm", "14 cm", "26 cm"],
      correctIndex: 0
    },
    {
      id: "h_math45",
      question: "A cube has side 6 cm. Volume?",
      options: ["216 cm³", "36 cm³", "144 cm³", "256 cm³"],
      correctIndex: 0
    },
    {
      id: "h_math46",
      question: "A cuboid is 5×4×3 cm. Volume?",
      options: ["60 cm³", "40 cm³", "50 cm³", "80 cm³"],
      correctIndex: 0
    },
    {
      id: "h_math47",
      question: "Probability of rolling a number greater than 4 on a fair die?",
      options: ["1/3", "1/2", "1/6", "2/3"],
      correctIndex: 0
    },
    {
      id: "h_math48",
      question: "Probability of getting a head on one fair coin toss?",
      options: ["1/2", "1/4", "1", "0"],
      correctIndex: 0
    },
    {
      id: "h_math49",
      question: "Two dice are rolled. Probability of getting a sum of 7?",
      options: ["1/6", "1/12", "1/9", "1/36"],
      correctIndex: 0
    },
    {
      id: "h_math50",
      question: "Two coins are tossed. Probability of two heads?",
      options: ["1/4", "1/2", "3/4", "1/8"],
      correctIndex: 0
    },
    {
      id: "h_math51",
      question: "How many 2-digit numbers can be formed from 2,3,4,5 without repetition?",
      options: ["12", "16", "8", "10"],
      correctIndex: 0
    },
    {
      id: "h_math52",
      question: "How many ways can 5 distinct books be arranged on a shelf?",
      options: ["120", "60", "100", "24"],
      correctIndex: 0
    },
    {
      id: "h_math53",
      question: "How many diagonals does a pentagon have?",
      options: ["5", "10", "4", "6"],
      correctIndex: 0
    },
    {
      id: "h_math54",
      question: "Median of 3, 9, 12, 14, 18, 21, 25?",
      options: ["14", "12", "18", "15"],
      correctIndex: 0
    },
    {
      id: "h_math55",
      question: "Mode of 4, 6, 6, 7, 8, 6, 9?",
      options: ["6", "7", "8", "4"],
      correctIndex: 0
    },
    {
      id: "h_math56",
      question: "Range of 5, 11, 17, 2, 20?",
      options: ["18", "15", "20", "22"],
      correctIndex: 0
    },
    {
      id: "h_math57",
      question: "Mean of 8 numbers is 16. Total?",
      options: ["128", "124", "132", "144"],
      correctIndex: 0
    },
    {
      id: "h_math58",
      question: "A salary of ₹40,000 rises by 12%. New salary?",
      options: ["₹44,800", "₹45,000", "₹43,200", "₹46,000"],
      correctIndex: 0
    },
    {
      id: "h_math59",
      question: "A price of ₹2,500 is reduced by 18%. New price?",
      options: ["₹2,050", "₹2,000", "₹2,100", "₹2,150"],
      correctIndex: 0
    },
    {
      id: "h_math60",
      question: "A population of 50,000 increases by 8%. New population?",
      options: ["54,000", "53,000", "55,000", "58,000"],
      correctIndex: 0
    },
    {
      id: "h_math61",
      question: "A number is 25% more than 160. Number?",
      options: ["200", "190", "210", "180"],
      correctIndex: 0
    },
    {
      id: "h_math62",
      question: "A number is 20% less than 450. Number?",
      options: ["360", "350", "370", "380"],
      correctIndex: 0
    },
    {
      id: "h_math63",
      question: "If 60% of a number is 84, 25% of it is:",
      options: ["35", "30", "42", "40"],
      correctIndex: 0
    },
    {
      id: "h_math64",
      question: "If 3/8 of a number is 45, the number is:",
      options: ["120", "100", "135", "160"],
      correctIndex: 0
    },
    {
      id: "h_math65",
      question: "If 5/6 of a number is 70, the number is:",
      options: ["84", "80", "90", "96"],
      correctIndex: 0
    },
    {
      id: "h_math66",
      question: "A:B investment ratio is 2:3. Profit ₹7,500. A gets:",
      options: ["₹3,000", "₹2,500", "₹4,500", "₹5,000"],
      correctIndex: 0
    },
    {
      id: "h_math67",
      question: "A invests ₹8,000 and B ₹12,000 for equal time. Profit ₹10,000. B gets:",
      options: ["₹6,000", "₹4,000", "₹5,000", "₹7,000"],
      correctIndex: 0
    },
    {
      id: "h_math68",
      question: "A shopkeeper marks goods 30% above cost and gives 10% discount. Profit?",
      options: ["17%", "20%", "15%", "18%"],
      correctIndex: 0
    },
    {
      id: "h_math69",
      question: "A shopkeeper marks goods 40% above cost and gives 20% discount. Profit?",
      options: ["12%", "16%", "20%", "8%"],
      correctIndex: 0
    },
    {
      id: "h_math70",
      question: "A 15% discount on ₹1,600 equals:",
      options: ["₹240", "₹200", "₹260", "₹280"],
      correctIndex: 0
    },
    {
      id: "h_math71",
      question: "A 12% tax on ₹2,500 equals:",
      options: ["₹300", "₹250", "₹275", "₹325"],
      correctIndex: 0
    },
    {
      id: "h_math72",
      question: "Convert 2.5 hours to minutes.",
      options: ["150", "120", "180", "125"],
      correctIndex: 0
    },
    {
      id: "h_math73",
      question: "Convert 3.6 km to metres.",
      options: ["3600 m", "360 m", "36000 m", "3060 m"],
      correctIndex: 0
    },
    {
      id: "h_math74",
      question: "If 4x=3x+17, x equals:",
      options: ["17", "14", "16", "18"],
      correctIndex: 0
    },
    {
      id: "h_math75",
      question: "If x²−9=0 and x is positive, x equals:",
      options: ["3", "-3", "9", "6"],
      correctIndex: 0
    },
    {
      id: "h_math76",
      question: "Simplify 3/5 + 1/10.",
      options: ["7/10", "4/15", "2/5", "3/10"],
      correctIndex: 0
    },
    {
      id: "h_math77",
      question: "Simplify 5/6 − 1/3.",
      options: ["1/2", "2/3", "1/3", "5/9"],
      correctIndex: 0
    },
    {
      id: "h_math78",
      question: "Simplify 2/3 × 9/4.",
      options: ["3/2", "2", "4/3", "3"],
      correctIndex: 0
    },
    {
      id: "h_math79",
      question: "Simplify 3/4 ÷ 9/8.",
      options: ["2/3", "3/2", "1/2", "4/3"],
      correctIndex: 0
    },
    {
      id: "h_math80",
      question: "If 0.4x=24, x equals:",
      options: ["60", "48", "72", "80"],
      correctIndex: 0
    }
  ],
  "Logical Reasoning": [
    {
      id: "h_logic1",
      question: "Next: 2,6,12,20,30,?",
      options: ["42", "40", "44", "46"],
      correctIndex: 0
    },
    {
      id: "h_logic2",
      question: "Next: 1,5,13,29,61,?",
      options: ["125", "121", "123", "127"],
      correctIndex: 0
    },
    {
      id: "h_logic3",
      question: "Next: 3,8,18,38,78,?",
      options: ["158", "156", "160", "162"],
      correctIndex: 0
    },
    {
      id: "h_logic4",
      question: "Next: 144,121,100,81,?",
      options: ["64", "72", "49", "60"],
      correctIndex: 0
    },
    {
      id: "h_logic5",
      question: "Next: 2,3,5,8,13,21,?",
      options: ["34", "31", "35", "36"],
      correctIndex: 0
    },
    {
      id: "h_logic6",
      question: "Next: 4,7,13,25,49,?",
      options: ["97", "95", "98", "101"],
      correctIndex: 0
    },
    {
      id: "h_logic7",
      question: "Next: 10,20,41,83,166,?",
      options: ["333", "332", "334", "336"],
      correctIndex: 0
    },
    {
      id: "h_logic8",
      question: "Next: 96,48,24,12,?",
      options: ["6", "8", "4", "3"],
      correctIndex: 0
    },
    {
      id: "h_logic9",
      question: "Next letter: A,C,F,J,O,?",
      options: ["U", "T", "V", "W"],
      correctIndex: 0
    },
    {
      id: "h_logic10",
      question: "Next letter: B,E,I,N,T,?",
      options: ["A", "Z", "Y", "B"],
      correctIndex: 0
    },
    {
      id: "h_logic11",
      question: "Next pair: AZ,BY,CX,DW,?",
      options: ["EV", "FU", "EW", "FV"],
      correctIndex: 0
    },
    {
      id: "h_logic12",
      question: "Next pair: AB,CD,FG,JK,?",
      options: ["MN", "LM", "NO", "OP"],
      correctIndex: 0
    },
    {
      id: "h_logic13",
      question: "CODE shifted one forward becomes:",
      options: ["DPEF", "DODF", "CPEF", "EPDG"],
      correctIndex: 0
    },
    {
      id: "h_logic14",
      question: "MATH shifted two forward becomes:",
      options: ["OCVJ", "NBUI", "OATH", "QCVJ"],
      correctIndex: 0
    },
    {
      id: "h_logic15",
      question: "TRAIN reversed: third letter?",
      options: ["A", "I", "R", "T"],
      correctIndex: 0
    },
    {
      id: "h_logic16",
      question: "COMPUTER alphabetically arranged: third letter?",
      options: ["M", "C", "O", "P"],
      correctIndex: 0
    },
    {
      id: "h_logic17",
      question: "Odd one out:",
      options: ["27", "64", "125", "210"],
      correctIndex: 3
    },
    {
      id: "h_logic18",
      question: "Odd one out:",
      options: ["16", "25", "36", "45"],
      correctIndex: 3
    },
    {
      id: "h_logic19",
      question: "Odd one out:",
      options: ["Mercury", "Venus", "Earth", "Moon"],
      correctIndex: 3
    },
    {
      id: "h_logic20",
      question: "Odd one out:",
      options: ["Copper", "Iron", "Silver", "Glass"],
      correctIndex: 3
    },
    {
      id: "h_logic21",
      question: "Book:Author :: Algorithm:?",
      options: ["Programmer", "Reader", "Printer", "Library"],
      correctIndex: 0
    },
    {
      id: "h_logic22",
      question: "Disease:Doctor :: Crime:?",
      options: ["Police", "Teacher", "Engineer", "Banker"],
      correctIndex: 0
    },
    {
      id: "h_logic23",
      question: "Seed:Plant :: Data:?",
      options: ["Information", "Keyboard", "Monitor", "Printer"],
      correctIndex: 0
    },
    {
      id: "h_logic24",
      question: "Compiler:Program :: Translator:?",
      options: ["Language", "Keyboard", "Database", "Network"],
      correctIndex: 0
    },
    {
      id: "h_logic25",
      question: "A taller B, B taller C, C taller D. Second tallest?",
      options: ["B", "A", "C", "D"],
      correctIndex: 0
    },
    {
      id: "h_logic26",
      question: "P older Q, Q older R, S older P. Youngest?",
      options: ["R", "Q", "P", "S"],
      correctIndex: 0
    },
    {
      id: "h_logic27",
      question: "A left B; C right B. Middle?",
      options: ["B", "A", "C", "Cannot determine"],
      correctIndex: 0
    },
    {
      id: "h_logic28",
      question: "D before A before B before C before E. First?",
      options: ["D", "A", "B", "C"],
      correctIndex: 0
    },
    {
      id: "h_logic29",
      question: "Facing north, right then left then right. Direction?",
      options: ["East", "North", "West", "South"],
      correctIndex: 0
    },
    {
      id: "h_logic30",
      question: "Facing east, left twice. Direction?",
      options: ["West", "North", "South", "East"],
      correctIndex: 0
    },
    {
      id: "h_logic31",
      question: "Facing south, right twice. Direction?",
      options: ["North", "East", "West", "South"],
      correctIndex: 0
    },
    {
      id: "h_logic32",
      question: "Walk 6 km north and 8 km east. Distance?",
      options: ["10 km", "14 km", "8 km", "12 km"],
      correctIndex: 0
    },
    {
      id: "h_logic33",
      question: "Walk 9 km west and 12 km south. Distance?",
      options: ["15 km", "21 km", "12 km", "18 km"],
      correctIndex: 0
    },
    {
      id: "h_logic34",
      question: "A sister B; B mother C. A is C's:",
      options: ["Aunt", "Mother", "Sister", "Grandmother"],
      correctIndex: 0
    },
    {
      id: "h_logic35",
      question: "X daughter Y; Y brother Z. X is Z's:",
      options: ["Niece", "Cousin", "Sister", "Aunt"],
      correctIndex: 0
    },
    {
      id: "h_logic36",
      question: "M father N; N sister P. M is P's:",
      options: ["Father", "Uncle", "Brother", "Grandfather"],
      correctIndex: 0
    },
    {
      id: "h_logic37",
      question: "All A are B; all B are C. Therefore:",
      options: ["All A are C", "All C are A", "Some C are not B", "No A are C"],
      correctIndex: 0
    },
    {
      id: "h_logic38",
      question: "No P are Q; all R are P. Therefore:",
      options: ["No R are Q", "All R are Q", "Some R are Q", "All Q are R"],
      correctIndex: 0
    },
    {
      id: "h_logic39",
      question: "Some M are N; all N are O. Therefore:",
      options: ["Some M are O", "All M are O", "No M are O", "All O are M"],
      correctIndex: 0
    },
    {
      id: "h_logic40",
      question: "All engineers are graduates. Certain:",
      options: ["All engineers are graduates", "All engineers are athletes", "Some engineers are athletes", "No engineers are graduates"],
      correctIndex: 0
    },
    {
      id: "h_logic41",
      question: "If P→Q and Q→R, then:",
      options: ["P→R", "R→P", "Q→P", "P→not R"],
      correctIndex: 0
    },
    {
      id: "h_logic42",
      question: "If P→Q and Q is false:",
      options: ["P is false", "P is true", "Q is true", "Nothing"],
      correctIndex: 0
    },
    {
      id: "h_logic43",
      question: "If P iff Q and P is true:",
      options: ["Q is true", "Q is false", "P is false", "Nothing"],
      correctIndex: 0
    },
    {
      id: "h_logic44",
      question: "Exactly one of P,Q is true is:",
      options: ["XOR", "AND", "OR", "XNOR"],
      correctIndex: 0
    },
    {
      id: "h_logic45",
      question: "A=1...Z=26, REASON equals:",
      options: ["75", "72", "78", "80"],
      correctIndex: 0
    },
    {
      id: "h_logic46",
      question: "A=1...Z=26, LOGIC equals:",
      options: ["47", "45", "49", "51"],
      correctIndex: 0
    },
    {
      id: "h_logic47",
      question: "A=1...Z=26, CLOUD equals:",
      options: ["57", "55", "59", "61"],
      correctIndex: 0
    },
    {
      id: "h_logic48",
      question: "Same relation as 8:64:",
      options: ["7:49", "6:42", "9:72", "10:90"],
      correctIndex: 0
    },
    {
      id: "h_logic49",
      question: "Same relation as 3:27:",
      options: ["5:125", "4:64", "6:36", "7:49"],
      correctIndex: 0
    },
    {
      id: "h_logic50",
      question: "Clock at 4:00. Smaller angle:",
      options: ["120°", "90°", "60°", "150°"],
      correctIndex: 0
    },
    {
      id: "h_logic51",
      question: "Clock at 7:30. Smaller angle:",
      options: ["45°", "60°", "75°", "90°"],
      correctIndex: 0
    },
    {
      id: "h_logic52",
      question: "Today Wednesday; 100 days later:",
      options: ["Friday", "Thursday", "Saturday", "Sunday"],
      correctIndex: 0
    },
    {
      id: "h_logic53",
      question: "Today Monday; 75 days later:",
      options: ["Sunday", "Saturday", "Monday", "Tuesday"],
      correctIndex: 0
    },
    {
      id: "h_logic54",
      question: "Jan 1 Monday; Feb 1 non-leap year:",
      options: ["Thursday", "Wednesday", "Friday", "Saturday"],
      correctIndex: 0
    },
    {
      id: "h_logic55",
      question: "Jan 1 Monday; Mar 1 non-leap year:",
      options: ["Thursday", "Friday", "Wednesday", "Saturday"],
      correctIndex: 0
    },
    {
      id: "h_logic56",
      question: "P before Q, Q before R, R before S. True:",
      options: ["P is before S", "S is before P", "Q is after S", "R is before Q"],
      correctIndex: 0
    },
    {
      id: "h_logic57",
      question: "A before B; C after D; B before D. First:",
      options: ["A", "B", "C", "D"],
      correctIndex: 0
    },
    {
      id: "h_logic58",
      question: "A immediately before B; C immediately before D. Possible:",
      options: ["ABCD", "BACD", "ACBD", "ABDC"],
      correctIndex: 0
    },
    {
      id: "h_logic59",
      question: "Vowels shifted cyclically A→E→I→O→U→A: CODE:",
      options: ["CUDI", "CIDO", "CADA", "CODE"],
      correctIndex: 0
    },
    {
      id: "h_logic60",
      question: "Every letter shifted one backward: BDF:",
      options: ["ACE", "BCD", "ADE", "ABC"],
      correctIndex: 0
    },
    {
      id: "h_logic61",
      question: "Missing: 5,10,20,40,?,160:",
      options: ["80", "60", "100", "120"],
      correctIndex: 0
    },
    {
      id: "h_logic62",
      question: "Missing: 1,4,10,22,?,94:",
      options: ["46", "44", "48", "50"],
      correctIndex: 0
    },
    {
      id: "h_logic63",
      question: "Missing: 2,5,11,23,?,95:",
      options: ["47", "46", "48", "49"],
      correctIndex: 0
    },
    {
      id: "h_logic64",
      question: "Some artists are programmers; all programmers logical. Therefore:",
      options: ["Some artists are logical thinkers", "All artists are logical thinkers", "No artists are logical thinkers", "Some programmers are not artists"],
      correctIndex: 0
    },
    {
      id: "h_logic65",
      question: "No mammals are reptiles; all snakes reptiles. Therefore:",
      options: ["No snakes are mammals", "All mammals are snakes", "Some snakes are mammals", "All reptiles are mammals"],
      correctIndex: 0
    },
    {
      id: "h_logic66",
      question: "Some teachers are writers; no writers pilots. Therefore:",
      options: ["Some teachers are not pilots", "All teachers are not pilots", "Some pilots are teachers", "No teachers are writers"],
      correctIndex: 0
    },
    {
      id: "h_logic67",
      question: "4→20, 5→30, 6→42, then 7→?",
      options: ["56", "49", "54", "63"],
      correctIndex: 0
    },
    {
      id: "h_logic68",
      question: "2→6, 3→12, 4→20, then 5→?",
      options: ["30", "25", "28", "35"],
      correctIndex: 0
    },
    {
      id: "h_logic69",
      question: "Using x²+y², 5+2 is:",
      options: ["29", "27", "25", "21"],
      correctIndex: 0
    },
    {
      id: "h_logic70",
      question: "Sequence ×2−3: 5,7,11,19,35,?",
      options: ["67", "65", "69", "71"],
      correctIndex: 0
    },
    {
      id: "h_logic71",
      question: "Sequence ×2+1: 2,5,11,23,47,?",
      options: ["95", "94", "96", "97"],
      correctIndex: 0
    },
    {
      id: "h_logic72",
      question: "Sequence +4,+6,+8,+10 from 3; after 31:",
      options: ["43", "41", "45", "47"],
      correctIndex: 0
    },
    {
      id: "h_logic73",
      question: "A person is 7th from front and 9th from back. Total?",
      options: ["15", "16", "17", "18"],
      correctIndex: 0
    },
    {
      id: "h_logic74",
      question: "In class of 40, Ravi is 12th from top. From bottom?",
      options: ["29th", "28th", "30th", "27th"],
      correctIndex: 0
    },
    {
      id: "h_logic75",
      question: "All squares are rectangles; some rectangles blue. Certain:",
      options: ["All squares are rectangles", "All squares are blue", "Some squares are blue", "No squares are blue"],
      correctIndex: 0
    },
    {
      id: "h_logic76",
      question: "No A are B; some C are A. Therefore:",
      options: ["Some C are not B", "All C are not B", "Some C are B", "All B are C"],
      correctIndex: 0
    },
    {
      id: "h_logic77",
      question: "All X are Y; some Y are Z. Certain:",
      options: ["All X are Y", "Some X are Z", "All Y are X", "No X are Z"],
      correctIndex: 0
    },
    {
      id: "h_logic78",
      question: "If 4→20, 5→30, 6→42, then 7→?",
      options: ["56", "49", "54", "63"],
      correctIndex: 0
    },
    {
      id: "h_logic79",
      question: "A person is 7th from the front and 9th from the back. Total people?",
      options: ["15", "16", "17", "18"],
      correctIndex: 0
    },
    {
      id: "h_logic80",
      question: "If no A are B and some C are A, which follows?",
      options: ["Some C are not B", "All C are not B", "Some C are B", "All B are C"],
      correctIndex: 0
    }
  ],
  "General Awareness": [
    {
      id: "h_aw1",
      question: "Which Indian constitutional article guarantees equality before law?",
      options: ["Article 14", "Article 19", "Article 21", "Article 25"],
      correctIndex: 0
    },
    {
      id: "h_aw2",
      question: "Which article protects life and personal liberty?",
      options: ["Article 21", "Article 14", "Article 19", "Article 32"],
      correctIndex: 0
    },
    {
      id: "h_aw3",
      question: "Which body conducts elections to Parliament and state legislatures?",
      options: ["Election Commission of India", "UPSC", "CAG", "Finance Commission"],
      correctIndex: 0
    },
    {
      id: "h_aw4",
      question: "Who is the ex-officio Chairman of the Rajya Sabha?",
      options: ["Vice-President", "President", "Prime Minister", "Speaker"],
      correctIndex: 0
    },
    {
      id: "h_aw5",
      question: "Who presides over the Lok Sabha?",
      options: ["Speaker", "President", "Vice-President", "Prime Minister"],
      correctIndex: 0
    },
    {
      id: "h_aw6",
      question: "The 73rd Constitutional Amendment is associated with:",
      options: ["Panchayati Raj", "Urban local bodies", "Fundamental Duties", "Emergency provisions"],
      correctIndex: 0
    },
    {
      id: "h_aw7",
      question: "The 74th Constitutional Amendment is associated with:",
      options: ["Urban local bodies", "Panchayati Raj", "Fundamental Rights", "Election rules"],
      correctIndex: 0
    },
    {
      id: "h_aw8",
      question: "Which amendment reduced India's voting age from 21 to 18?",
      options: ["61st Amendment", "42nd Amendment", "44th Amendment", "73rd Amendment"],
      correctIndex: 0
    },
    {
      id: "h_aw9",
      question: "The Quit India Movement began in:",
      options: ["1942", "1930", "1920", "1947"],
      correctIndex: 0
    },
    {
      id: "h_aw10",
      question: "The Dandi March was associated with:",
      options: ["Salt Satyagraha", "Quit India Movement", "Non-Cooperation", "Home Rule"],
      correctIndex: 0
    },
    {
      id: "h_aw11",
      question: "The Jallianwala Bagh massacre occurred in:",
      options: ["1919", "1920", "1930", "1942"],
      correctIndex: 0
    },
    {
      id: "h_aw12",
      question: "Who chaired the Drafting Committee of the Indian Constitution?",
      options: ["B. R. Ambedkar", "Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"],
      correctIndex: 0
    },
    {
      id: "h_aw13",
      question: "Where was the first session of the Indian National Congress held in 1885?",
      options: ["Bombay", "Calcutta", "Madras", "Delhi"],
      correctIndex: 0
    },
    {
      id: "h_aw14",
      question: "Which Harappan site is famous for its dockyard?",
      options: ["Lothal", "Harappa", "Mohenjo-daro", "Kalibangan"],
      correctIndex: 0
    },
    {
      id: "h_aw15",
      question: "Which civilization is associated with Harappa and Mohenjo-daro?",
      options: ["Indus Valley Civilization", "Roman Civilization", "Greek Civilization", "Mayan Civilization"],
      correctIndex: 0
    },
    {
      id: "h_aw16",
      question: "Which organelle produces most ATP in aerobic cells?",
      options: ["Mitochondrion", "Ribosome", "Golgi apparatus", "Lysosome"],
      correctIndex: 0
    },
    {
      id: "h_aw17",
      question: "Where is most genetic material stored in a typical eukaryotic cell?",
      options: ["Nucleus", "Ribosome", "Golgi apparatus", "Vacuole"],
      correctIndex: 0
    },
    {
      id: "h_aw18",
      question: "Which molecule carries hereditary information in most organisms?",
      options: ["DNA", "ATP", "Glucose", "Hemoglobin"],
      correctIndex: 0
    },
    {
      id: "h_aw19",
      question: "Which blood component is mainly involved in clotting?",
      options: ["Platelets", "Red blood cells", "White blood cells", "Plasma"],
      correctIndex: 0
    },
    {
      id: "h_aw20",
      question: "Which hormone lowers blood glucose?",
      options: ["Insulin", "Glucagon", "Adrenaline", "Thyroxine"],
      correctIndex: 0
    },
    {
      id: "h_aw21",
      question: "Which hormone raises blood glucose during fasting?",
      options: ["Glucagon", "Insulin", "Melatonin", "Calcitonin"],
      correctIndex: 0
    },
    {
      id: "h_aw22",
      question: "Which organ produces bile?",
      options: ["Liver", "Pancreas", "Kidney", "Stomach"],
      correctIndex: 0
    },
    {
      id: "h_aw23",
      question: "Which organ stores bile?",
      options: ["Gallbladder", "Liver", "Pancreas", "Spleen"],
      correctIndex: 0
    },
    {
      id: "h_aw24",
      question: "Which organ filters blood to form urine?",
      options: ["Kidney", "Liver", "Lung", "Heart"],
      correctIndex: 0
    },
    {
      id: "h_aw25",
      question: "Which brain region helps coordinate balance and movement?",
      options: ["Cerebellum", "Medulla", "Hypothalamus", "Spinal cord"],
      correctIndex: 0
    },
    {
      id: "h_aw26",
      question: "Which gas is required for aerobic respiration?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
      correctIndex: 0
    },
    {
      id: "h_aw27",
      question: "Which process lets green plants make food using light?",
      options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
      correctIndex: 0
    },
    {
      id: "h_aw28",
      question: "Which gas is consumed during photosynthesis?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correctIndex: 0
    },
    {
      id: "h_aw29",
      question: "Which law relates voltage, current and resistance?",
      options: ["Ohm's law", "Boyle's law", "Charles's law", "Newton's law"],
      correctIndex: 0
    },
    {
      id: "h_aw30",
      question: "SI unit of electric current:",
      options: ["Ampere", "Volt", "Ohm", "Watt"],
      correctIndex: 0
    },
    {
      id: "h_aw31",
      question: "SI unit of electric power:",
      options: ["Watt", "Joule", "Coulomb", "Ohm"],
      correctIndex: 0
    },
    {
      id: "h_aw32",
      question: "SI unit of electric charge:",
      options: ["Coulomb", "Volt", "Ampere", "Watt"],
      correctIndex: 0
    },
    {
      id: "h_aw33",
      question: "Which radiation has the highest frequency among these?",
      options: ["Gamma rays", "Radio waves", "Microwaves", "Infrared"],
      correctIndex: 0
    },
    {
      id: "h_aw34",
      question: "Which lens corrects myopia?",
      options: ["Concave lens", "Convex lens", "Plane lens", "Prism"],
      correctIndex: 0
    },
    {
      id: "h_aw35",
      question: "Which lens corrects hypermetropia?",
      options: ["Convex lens", "Concave lens", "Plane lens", "Prism"],
      correctIndex: 0
    },
    {
      id: "h_aw36",
      question: "Which planet has the shortest orbital period?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctIndex: 0
    },
    {
      id: "h_aw37",
      question: "Which planet has the Great Red Spot?",
      options: ["Jupiter", "Saturn", "Mars", "Neptune"],
      correctIndex: 0
    },
    {
      id: "h_aw38",
      question: "Which planet is famous for its extensive ring system?",
      options: ["Saturn", "Mars", "Venus", "Mercury"],
      correctIndex: 0
    },
    {
      id: "h_aw39",
      question: "Which planet rotates retrograde relative to most planets?",
      options: ["Venus", "Mars", "Jupiter", "Neptune"],
      correctIndex: 0
    },
    {
      id: "h_aw40",
      question: "Which Earth layer is primarily liquid iron and nickel?",
      options: ["Outer core", "Inner core", "Mantle", "Crust"],
      correctIndex: 0
    },
    {
      id: "h_aw41",
      question: "Plates moving apart form a:",
      options: ["Divergent boundary", "Convergent boundary", "Transform boundary", "Stationary boundary"],
      correctIndex: 0
    },
    {
      id: "h_aw42",
      question: "Plates sliding past one another form a:",
      options: ["Transform boundary", "Divergent boundary", "Convergent boundary", "Subduction boundary"],
      correctIndex: 0
    },
    {
      id: "h_aw43",
      question: "Which instrument measures atmospheric pressure?",
      options: ["Barometer", "Hygrometer", "Anemometer", "Thermometer"],
      correctIndex: 0
    },
    {
      id: "h_aw44",
      question: "Which instrument measures humidity?",
      options: ["Hygrometer", "Barometer", "Anemometer", "Seismograph"],
      correctIndex: 0
    },
    {
      id: "h_aw45",
      question: "Which instrument measures wind speed?",
      options: ["Anemometer", "Barometer", "Hygrometer", "Seismograph"],
      correctIndex: 0
    },
    {
      id: "h_aw46",
      question: "Which scale measures mineral hardness?",
      options: ["Mohs scale", "Richter scale", "Beaufort scale", "Fujita scale"],
      correctIndex: 0
    },
    {
      id: "h_aw47",
      question: "Which river is called the Sorrow of Bihar because of severe flooding?",
      options: ["Kosi", "Narmada", "Godavari", "Tapi"],
      correctIndex: 0
    },
    {
      id: "h_aw48",
      question: "Which major Indian river flows west into the Arabian Sea?",
      options: ["Narmada", "Ganga", "Yamuna", "Kosi"],
      correctIndex: 0
    },
    {
      id: "h_aw49",
      question: "Black soil is especially suitable for:",
      options: ["Cotton", "Tea", "Jute", "Apple"],
      correctIndex: 0
    },
    {
      id: "h_aw50",
      question: "Which monsoon branch brings heavy rainfall to India's west coast?",
      options: ["Arabian Sea branch", "Bay of Bengal branch", "Northeast branch", "Polar branch"],
      correctIndex: 0
    },
    {
      id: "h_aw51",
      question: "Which city is known as India's Silicon Valley?",
      options: ["Bengaluru", "Mumbai", "Chennai", "Jaipur"],
      correctIndex: 0
    },
    {
      id: "h_aw52",
      question: "India's central bank is:",
      options: ["Reserve Bank of India", "SEBI", "SBI", "NITI Aayog"],
      correctIndex: 0
    },
    {
      id: "h_aw53",
      question: "Which body regulates India's securities market?",
      options: ["SEBI", "RBI", "TRAI", "IRDAI"],
      correctIndex: 0
    },
    {
      id: "h_aw54",
      question: "Which body regulates insurance in India?",
      options: ["IRDAI", "SEBI", "RBI", "TRAI"],
      correctIndex: 0
    },
    {
      id: "h_aw55",
      question: "Which body regulates telecommunications in India?",
      options: ["TRAI", "SEBI", "RBI", "FSSAI"],
      correctIndex: 0
    },
    {
      id: "h_aw56",
      question: "GDP broadly measures:",
      options: ["Value of final goods and services produced within an economy", "Total population", "Government debt only", "Exports only"],
      correctIndex: 0
    },
    {
      id: "h_aw57",
      question: "Inflation generally means:",
      options: ["A sustained rise in the general price level", "A fall in population", "A rise in rainfall", "A fall in exports only"],
      correctIndex: 0
    },
    {
      id: "h_aw58",
      question: "Which organization is primarily responsible for global public health?",
      options: ["WHO", "WTO", "UNESCO", "UNHCR"],
      correctIndex: 0
    },
    {
      id: "h_aw59",
      question: "WHO headquarters is in:",
      options: ["Geneva", "New York", "Paris", "Rome"],
      correctIndex: 0
    },
    {
      id: "h_aw60",
      question: "UNESCO headquarters is in:",
      options: ["Paris", "Geneva", "London", "Vienna"],
      correctIndex: 0
    },
    {
      id: "h_aw61",
      question: "Which organization makes global trade rules?",
      options: ["WTO", "WHO", "UNESCO", "ILO"],
      correctIndex: 0
    },
    {
      id: "h_aw62",
      question: "Which institution focuses on monetary stability and balance-of-payments support?",
      options: ["IMF", "WHO", "UNESCO", "Interpol"],
      correctIndex: 0
    },
    {
      id: "h_aw63",
      question: "Which institution provides major development financing to developing countries?",
      options: ["World Bank", "WHO", "WTO", "UNESCO"],
      correctIndex: 0
    },
    {
      id: "h_aw64",
      question: "Which country is called the Land of the Rising Sun?",
      options: ["Japan", "China", "Thailand", "South Korea"],
      correctIndex: 0
    },
    {
      id: "h_aw65",
      question: "Which is the largest hot desert?",
      options: ["Sahara", "Gobi", "Kalahari", "Thar"],
      correctIndex: 0
    },
    {
      id: "h_aw66",
      question: "Which is the largest island in the world?",
      options: ["Greenland", "Madagascar", "Borneo", "New Guinea"],
      correctIndex: 0
    },
    {
      id: "h_aw67",
      question: "Which mountain range contains Mount Everest?",
      options: ["Himalayas", "Andes", "Alps", "Rockies"],
      correctIndex: 0
    },
    {
      id: "h_aw68",
      question: "Mount Everest lies on the border of Nepal and:",
      options: ["China", "India", "Bhutan", "Pakistan"],
      correctIndex: 0
    },
    {
      id: "h_aw69",
      question: "Which sea separates Europe and Africa?",
      options: ["Mediterranean Sea", "Arabian Sea", "Black Sea", "Red Sea"],
      correctIndex: 0
    },
    {
      id: "h_aw70",
      question: "Which canal connects the Mediterranean Sea and Red Sea?",
      options: ["Suez Canal", "Panama Canal", "Kiel Canal", "Corinth Canal"],
      correctIndex: 0
    },
    {
      id: "h_aw71",
      question: "Which canal connects the Atlantic and Pacific through Panama?",
      options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Corinth Canal"],
      correctIndex: 0
    },
    {
      id: "h_aw72",
      question: "Which country uses the yen?",
      options: ["Japan", "China", "South Korea", "Thailand"],
      correctIndex: 0
    },
    {
      id: "h_aw73",
      question: "Which country uses pound sterling?",
      options: ["United Kingdom", "Canada", "Australia", "New Zealand"],
      correctIndex: 0
    },
    {
      id: "h_aw74",
      question: "Which Indian space agency operates Chandrayaan missions?",
      options: ["ISRO", "DRDO", "BARC", "CSIR"],
      correctIndex: 0
    },
    {
      id: "h_aw75",
      question: "Aditya-L1 primarily studies:",
      options: ["The Sun", "Mars", "Earth's oceans", "Jupiter"],
      correctIndex: 0
    },
    {
      id: "h_aw76",
      question: "Chandrayaan-3 landed on:",
      options: ["The Moon", "Mars", "Venus", "An asteroid"],
      correctIndex: 0
    },
    {
      id: "h_aw77",
      question: "Which telescope primarily observes infrared wavelengths?",
      options: ["James Webb Space Telescope", "Hubble Space Telescope", "Chandra Observatory", "Kepler"],
      correctIndex: 0
    },
    {
      id: "h_aw78",
      question: "Which sport uses a pommel horse?",
      options: ["Gymnastics", "Fencing", "Rowing", "Archery"],
      correctIndex: 0
    },
    {
      id: "h_aw79",
      question: "Which sport uses the terms love, deuce and ace?",
      options: ["Tennis", "Cricket", "Hockey", "Football"],
      correctIndex: 0
    },
    {
      id: "h_aw80",
      question: "Which chess piece moves in an L shape?",
      options: ["Knight", "Bishop", "Rook", "Queen"],
      correctIndex: 0
    }
  ]
};
