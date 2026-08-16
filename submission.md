# Project Submission Report

## 1. Student Details

- **Full Name:** Steven Kiptoo Yabann
- **GitHub Username:** Steven-Yabann
- **Email:** steven.yabann@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/commodity-news-167027/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/commodity-news-167027/commit/d9b7e8fcae972516557a8c924c28458c0368dc6e
- **Why this one?** Implemented a chart to track price trends from a real API

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/commodity-news-167027/pull/1
- **What happened and how did you recover?** During initial setup, the repository was initialized on local before the GitHub Project board and granular issue tracking were linked, risking unreferenced commits. I corrected this by checking out the isolated feature branch `feat/1-initial-scaffolding`, syncing the remote issue numbers first, and using explicit footer bindings `Closes #1` in the commit message before submitting the Pull Request.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/commodity-news-167027/pull/3
- **What did you check before merging?** I inspected the unified diff view on GitHub to confirm CSS variables in `style.css` were properly scoped

### D. One Thing You Would Do Differently

- **What would you change?** I would define and label all granular issues and milestone story points across the Kanban board before writing the first line of scaffolding, ensuring that feature branches branch exclusively from an existing issue ticket from minute zero.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/commodity-news-167027/issues/1

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

![milestone image](/Evidence/Milestones.png)

* **Caption:** Overview of active project milestones 

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

![project image](/Evidence/project.png)

* **Caption:** Kanban project board tracking task movement from backlog through active development to completion.

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

![branch image](/Evidence/branches.png)

* **Caption:** Terminal and remote branch list showing isolated feature, style, and fix branches mapped to issue IDs.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

![PR image](/Evidence/pull_request.png)

* **Caption:** Pull Request interface 

---

## 5. Merge Conflict Evidence

---

### Conflict 1 — Full Chronology

**What cause did you use?** Competing Line Modifications (Two branches modifying the exact same line of code concurrently).

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

![Merge Conflict](/Evidence/merge_conflict.png)

* **Caption:** Conflict triggered in the terminal when merging `feat/conflict-branch-a` into `feat/conflict-branch-b` due to divergent changes on `<title>` in `index.html`.

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

![arrows](/Evidence/arrows.png)

* **Caption:** VS Code editor displaying Git collision markers between the local HEAD and the incoming feature branch.

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

![clean mergr PR](/Evidence/clean_merge_PR.png)

* **Caption:** Clean commit history following conflict resolution and successful merge into `main`.

---

### Conflict 2 — Modify/Delete Conflict

**What cause did you use?** Modify/Delete Conflict (One branch modifies a file while a concurrent branch renames or deletes the same file).

**Why does this cause trigger a conflict?** Git cannot automatically reconcile whether changes should be applied to the newly modified content or if the entire file should be removed as dictated by the opposing branch.

![conflict 2](/Evidence/conflict_2.png)

* **Caption:** Modify/delete conflict on `config.js` between `feat/update-config` and `chore/remove-legacy-config`.

---

### Conflict 3 — File Addition Collision

**What cause did you use?** File Addition Collision (Two independent branches add a brand-new file with the exact same filename but differing internal contents).

**Why does this cause trigger a conflict?** Because neither branch had this file at the common ancestor commit, Git cannot resolve which version of the newly created file should take precedence.

![conflict 3](/Evidence/conflict_3.png)

* **Caption:** File collision on `constants.js` added independently across two concurrent feature branches.

---

