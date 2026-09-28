Project Overview
1. System Objectives

FruitExpress aims to provide a digital marketplace that connects fruit farmers directly with consumers. The system is intended to improve market access for farmers, simplify the ordering process, reduce dependence on middlemen, and improve transaction management.

The system will benefit farmers by providing a platform where they can manage their fruit products, inventory, and orders. Consumers will benefit by having convenient access to available seasonal fruits, transparent product information, online ordering, and order updates.

2. Proposed Scope

The proposed FruitExpress system will integrate the following major modules and functions:

User account registration and management
Secure login and authentication
Fruit product listing and browsing
Product and inventory management for farmers
Shopping cart
Online ordering
Cash on Delivery (COD) payment option
Order status and SMS notifications
Farmer-consumer communication
Administrator monitoring and reporting
In-Scope Features

The initial implementation will focus on seasonal fruits produced by Ornos Farm within Victoria, Oriental Mindoro.

The system will include:

Consumer account management
Farmer account and product management
Fruit inventory management
Product browsing
Shopping cart
Order placement
COD payment
Order notifications
Communication between farmers and consumers
Administrator monitoring
Out-of-Scope Features

The following features are outside the initial scope:

Expansion to farms outside the initial target area
Delivery fleet management
International transactions
Advanced logistics optimization
Automated warehouse management

These features may be considered for future development.

3. Stakeholders
Farmers

Farmers will use the system to manage fruit listings, inventory, and customer orders. Their primary need is an easier way to reach consumers and manage transactions.

Consumers

Consumers will use the system to browse available fruits, place orders, receive updates, and communicate with farmers. Their primary need is convenient access to fresh fruits at reasonable and transparent prices.

System Administrator

The administrator will monitor users, transactions, and system activities. The administrator will also support system management and reporting.

Ornos Farm Management

Ornos Farm Management will oversee the use of the system for the farm's seasonal fruit distribution and marketplace operations.

SMS Gateway Provider

The SMS Gateway Provider will support the delivery of order-related notifications to users.

Payment Service Provider

The Payment Service Provider supports the payment process. The initial system will also support Cash on Delivery (COD).

4. Tools & Technologies
Development Tools
Visual Studio Code
Git
GitHub

Proposed Web Technologies
HTML
CSS
JavaScript
Laravel php

Integration Approaches

The system may use REST APIs for communication between the frontend, backend, and external services. SMS notification services and payment-related services may be integrated through their respective APIs or service interfaces.

Repository and Collaboration Services
GitHub for source code hosting and version control
Git branches for individual development work
Pull Requests for code/documentation review
MS Teams for team communication

Testing Tools
Browser-based testing
Manual functional testing
GitHub repository testing workflow
Postman

High-Level System Overview
1. Major Modules / Subsystems
User Management
This module handles user registration, login, and profile management for consumers, farmers, and vendors. It also manages account creation and role-based access.

Product Management
This module allows farmers and vendors to manage fruit products and their details. Users can add, update, or delete products, manage inventory, and view product information.

Order Management
This module handles the creation and management of orders. It tracks order status, processes order details, and updates inventory based on order activities.

Payment Processing
This module handles payments through GCash and Cash on Delivery (COD). It confirms payments, stores transaction records, and updates the status of orders.

2. External Systems / Interfaces
GCash API
The GCash API is used for online payment processing and transaction verification.

SMS Gateway
The SMS Gateway sends order updates, delivery alerts, and other notifications to users.

Firebase / Firestore Database
Firebase Firestore stores the system's data, including user accounts, products, orders, and payment records.

3. Data Flow Summary
Users such as consumers, farmers, and vendors interact with FruitExpress by registering or logging in, browsing products, and placing orders. The system processes these activities through the User Management, Product Management, Order Management, and Payment Processing modules.

Product, order, and user information is stored in the Firebase Firestore database, while payment transactions are processed through the GCash API. The system also uses the SMS Gateway to send order updates and delivery alerts.

After processing, updated information such as order status, payment confirmation, and inventory changes is returned to the appropriate users through the application.

# Integration Pattern & Rationale

# Integration Pattern

FruitExpress uses a REST-based integration pattern for communication between its modules and clients. The API is developed using Node.js and Express and exposes HTTP endpoints for the Product and Order modules.

The Product module provides endpoints for retrieving and adding product records, while the Order module provides endpoints for retrieving and adding order records. Data is exchanged using JSON over HTTP.

# REST API Endpoints

# Product Module

- GET `/products` — Retrieves all products.
- POST `/products` — Adds a new product.

# Order Module

- GET `/orders` — Retrieves all orders.
- POST `/orders` — Adds a new order.

# Rationale

REST was selected because it works well with web-based systems and uses standard HTTP methods for communication. JSON also provides a simple format for exchanging data between the client and server. For this activity, an in-memory data structure is used instead of a database so that the API can be developed and tested without additional database configuration.

# Messaging Workflow

FruitExpress uses a simple in-memory message queue to demonstrate asynchronous communication between the Order and Approval modules. When an order is submitted, the Order Module acts as the producer and places an order approval request into the queue.

The Approval Module acts as the consumer. It reads the queued messages and processes each request one at a time. For this prototype, orders with an amount of 50,000 or less are approved, while orders above 50,000 are rejected.

Using a message queue separates order submission from approval processing. The Order Module can place a request in the queue without directly handling the approval process, while the Approval Module processes the requests from the queue.