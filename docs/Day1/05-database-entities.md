# LeadOS AI — Database Entities

## 1. Core Entities

The initial MongoDB data model will contain:

```text
User
Organization
Lead
Company
Contact
Activity
Task
Note
```

---

## 2. Organization

Represents a business/workspace using LeadOS AI.

Basic purpose:

* Organization identity
* Users
* Leads
* Activities
* Data isolation

---

## 3. User

Represents a user operating the system.

Basic responsibilities:

* Authentication
* Organization membership
* Role
* Permissions
* Profile

---

## 4. Lead

Represents a sales prospect.

Basic information:

* Business Information
* Contact Information
* Industry
* Location
* Segment
* Source
* Status
* Score
* Digital Presence
* Pain Points
* Recommended Services
* Created Date
* Updated Date

---

## 5. Company

Represents the business associated with a lead.

---

## 6. Contact

Represents the person/contact associated with a company or lead.

---

## 7. Activity

Records sales interactions.

Examples:

* Call
* Email
* LinkedIn
* WhatsApp
* Offline Visit
* Meeting
* Proposal
* Follow-up

---

## 8. Task

Represents an actionable sales task.

Examples:

* Call prospect
* Send email
* Follow up
* Schedule meeting

---

## 9. Note

Stores sales-related notes connected to a lead.

---

## 10. Basic Relationship

```text
Organization
      │
      ├── Users
      │
      ├── Leads
      │     │
      │     ├── Company
      │     ├── Contact
      │     ├── Activities
      │     ├── Tasks
      │     └── Notes
      │
      └── Analytics
```

---

## 11. Multi-Tenant Principle

Each organization must have isolated data.

Concept:

```text
Organization A
 ├── Users
 ├── Leads
 └── Activities

Organization B
 ├── Users
 ├── Leads
 └── Activities
```

This provides the foundation for future SaaS development.
