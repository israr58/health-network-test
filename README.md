# 🚀 Interactive Healthcare Network Graph

A polished React + Vite app that visualizes relationships among Healthcare Professionals (HCPs) with advanced interactivity.
Designed to match real-world technical challenge requirements.



# ✅ Features
- Search & Highlight
- Search for an HCP by name → highlight & center that HCP → see direct connections only.
- Dynamic Subgraph View
- On search, filters to show only the selected HCP and directly connected HCPs with labeled connections.

# Connection Paths
- Displays labeled edges (e.g., Co-author, Shared Workplace).

# Interactivity

- Click a node → detailed modal with education, work experience, publications.
- Hover or click a connection → see connection details.
- Smooth zoom, pan, and physics-based layout.

# Clear Selection
- Easily reset to the full network view with a Clear button.

# Clean Design
- Profile image nodes with colored borders, polished search bar with clear button.

# ⚙️ Tech Stack
- Vite (React + ES Modules)
- react-force-graph-2d (network visualization)
- React Bootstrap (modals)
- Plain CSS / Inline styling (clean, easy styling)

# Project Structure
src/
 ├── App.jsx               # Main container, handles search & clear logic
 ├── components/
 │   ├── SearchBar.jsx     # Clean search input + clear button
 │   ├── Graph.jsx         # Force-directed graph with custom node rendering
 │   ├── NodeModal.jsx     # Shows HCP details
 │   ├── EdgeModal.jsx     # Shows connection details
 ├── data/
 │   └── mock_large_graph.json  # Example graph data with HCPs and connections
 ├── main.jsx              # Vite entry

# 1️⃣ Clone this repo
git clone https://github.com/israr58/health-network-test.git
cd your-repo-name

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run it
npm run dev

# 4️⃣ Open it
# Visit http://localhost:5173


# 🔍 How to Use
✅ Search

Type an HCP name (partial or full)

Click Search → that HCP appears in center, with direct connections only.

✅ View Details

Click any node → see education, work, publications.

Hover or click any link → see connection type.

✅ Clear

Click Clear → resets view to full network.