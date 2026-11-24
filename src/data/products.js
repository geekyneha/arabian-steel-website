/** Products & services. Items with a `parent` are sub-pages of that product. */
export const PRODUCTS = [
  {
    id: "structural", title: "Structural Steel", subtitle: "Products & Services",
    summary: "Design, fabrication, surface treatment, supply and delivery of steel structures for industrial and commercial projects.",
    intro: [
      "Complete design, connection design, detailing, fabrication, surface treatment, supply and delivery of structural steel for industrial and commercial projects.",
      "Supported by an in-house engineering team working to international codes and standards, with CNC machines linked directly to engineering for accurate processing.",
    ],
    items: ["Pipe racks", "Equipment structures", "Derrick (flare) structures", "Platforms", "Steel buildings and shelters", "Commercial building structures", "High-rise building structures", "Boiler structures", "Sports stadium structures", "Miscellaneous steel structures"],
  },
  {
    id: "tanks", title: "Storage Tanks", subtitle: "Atmospheric Tanks (API 650)",
    summary: "Atmospheric and special tanks for water, fuel, oil and other liquids, built to API, ASME, AWWA and UL codes.",
    intro: [
      "Underground and aboveground utility tanks and accessories for the safe storage of water, fuel, oil and other liquids, designed, fabricated, delivered and erected in compliance with regulatory codes.",
      "Engineering support runs from pre-bid design to project execution under API, ASME, AWWA and UL codes.",
    ],
    items: ["Cone roof, self or column supported", "Dome roof", "Internal & external floating roof", "Special Tanks: UL-142, AWWA D-100, API 12F", "Bins and silos", "Open top tanks"],
  },
  {
    id: "skids", title: "Skids", subtitle: "Product List",
    summary: "Flow-metering, chemical injection, modular, surge relief and truck loading skids, tested before shipment.",
    intro: [
      "A full range of flow-metering, chemical injection, modular wellsite, surge relief and truck loading skids, integrated and tested before shipment.",
      "Built for upstream, midstream and downstream oil and gas, with design, development, manufacturing, installation and service quality controlled in-house.",
    ],
    items: ["Custody metering skids with prover (liquids)", "Custody metering skids (gas)", "Metering control systems (liquid)", "Chemical injection skids", "Surge relief skids", "ZV skids", "Truck loading skids", "Gas & oil modular skids", "Annuli riser skids", "OPTF skids", "Power water injection skid", "Waste oil extraction skid"],
  },
  {
    id: "chemical-injection", parent: "skids", title: "Chemical Injection Skids", subtitle: "Types of Injection Skids",
    intro: [
      "Chemical injection protects a system from accelerated corrosion and scale formation. Systems combine several chemical services with storage tanks or vessels; injection rate and temperature are the key design factors.",
      "Designed, fabricated, tested and commissioned to client requirements in stainless steel, FBE-coated carbon steel and alloy materials.",
    ],
    items: ["Corrosion inhibitor", "Oxygen scavenger", "Scale inhibitor", "Methanol, phosphate and demulsifier", "Dye injection", "DRA injection", "Caustic injection", "Multi-injection pump skids"],
  },
  {
    id: "modular-skids", parent: "skids", title: "Modular Skids", subtitle: "Modular Skids Classified",
    intro: [
      "A modular skid holds a complete process system in a transportable frame. Several skids can be combined into larger systems for brown and green field developments.",
      "Meters, valves, instrumentation, control panels and an ESD PLC between the wellhead and main flow line are assembled as one integrated unit.",
    ],
    items: ["Gas modular skid", "Oil modular skid", "Annuli riser skid", "Off plot tie-in facilities (OPTF) skid", "Power water injection skid"],
  },
  {
    id: "surge-relief", parent: "skids", title: "Surge Relief Skids", subtitle: "Protects",
    intro: [
      "A pressure surge is generated whenever the rate of flow in a pipeline changes, and can be dangerously high if the change is too rapid. Valve and pump operation or air expulsion can cause surges (water hammer).",
      "A surge analysis sets the flow to be relieved and the set pressure, so a correctly sized package keeps surge pressure at an acceptable level.",
    ],
    items: ["Pipelines and transmission lines", "Oil tanker loading terminals", "Storage terminals", "Equipment and personnel"],
  },
  {
    id: "metering-skids", parent: "skids", title: "Metering Skids", subtitle: "Capabilities",
    intro: [
      "Custody transfer metering measures fluid sold from one party to another, so accuracy is critical. A meter skid brings pipework, filters, meters and instruments onto one platform.",
      "Skids are installed and tested offsite, then shipped for use as the main metering unit.",
    ],
    items: ["Custody metering with prover (liquids)", "Custody metering (gas)", "Gas orifice metering", "Flow computer and supervisory control", "Meters selected per API and client standards"],
  },
  {
    id: "truck-loading", parent: "skids", title: "Truck Loading Skids", subtitle: "Applications",
    intro: [
      "Reliable, accurate and timely product transfer while preserving regulatory and safety compliance, in top and bottom loading configurations.",
      "Top loading: loading arms transfer liquid through the tank manhole. Bottom loading: ground-level loading with a preset device that shuts off flow after a set batch, which is inherently safer for the operator.",
    ],
    items: ["Asphalt", "Gasoline", "Fuel oil", "Diesel", "Methanol", "LPG"],
  },
  {
    id: "oil-modular-skids", parent: "skids", title: "Oil Modular Skids", subtitle: "Key Components",
    intro: [
      "Oil modular skids regulate the oil stream from the well and connect directly to the Christmas tree. Instruments and control valves manage flow; a corrosion monitor checks the pipeline.",
      "A multiphase flowmeter measures individual flow rates. The package is integrated and tested as one unit to client parameters.",
    ],
    items: ["Multiphase flowmeter", "Control valves and instruments", "Corrosion monitor", "Sampling cylinder"],
  },
  {
    id: "zv-skid", parent: "skids", title: "ZV Skid", subtitle: "Pressure Control Valve Types",
    intro: [
      "A pressure reduction station (ZV skid) drops a high supply pressure to the level the downstream installation needs, on liquids, vapors and gases.",
      "Self-regulating valves adjust their opening to pass only enough flow to hold the required downstream pressure.",
    ],
    items: ["Self-acting, no external power or input", "Pneumatically actuated", "Electrically actuated"],
  },
  {
    id: "process-equipment", title: "Process Equipment", subtitle: "Static Equipment",
    summary: "Static equipment designed, fabricated, tested (NDT) and heat treated (PWHT) to client specifications.",
    intro: ["Complete design, detail engineering, fabrication, testing (NDT) and post-weld heat treatment (PWHT) to meet client specifications and requirements."],
    items: ["Pressure vessels in CS, SS and clad", "Shell & tube heat exchangers", "Tanks in CS & SS", "Ducts & stacks", "Piping", "Pipe spools", "Scraper launcher & receiver"],
  },
  {
    id: "weld-overlay", title: "Weld Overlay", subtitle: "Cladding",
    summary: "Weld overlay cladding for vessel internal surfaces and nozzles.",
    intro: ["Weld overlay cladding for vessel internal surfaces, nozzles and pipework."],
    items: ["Weld overlay for vessel internal surfaces and nozzles"],
  },
  {
    id: "plant-maintenance", title: "Plant & Maintenance", subtitle: "Products & Services",
    summary: "Design, fabrication, assembly and erection at site for shutdown and maintenance work.",
    intro: ["Complete design, fabrication, assembly and erection at site for shutdown and maintenance activities."],
    items: ["Pressure vessel repair and modification (ASME “R” stamp)", "Weld overlay for vessel internal surfaces and nozzles", "Storage tank repair and modification (API 653)", "Heat exchanger maintenance and repair", "Air coolers: cleaning, nozzle replacement, tube repair", "Columns: tray support rings, tray floors and repairs", "Pipeline construction, repair and modification", "Flare and stack work"],
  },
];

export const MAIN_PRODUCTS = PRODUCTS.filter((p) => !p.parent);
export const SKID_PRODUCTS = PRODUCTS.filter((p) => p.parent === "skids");

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);

export const searchProducts = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter((p) => [p.title, p.subtitle, ...p.intro, ...p.items].join(" ").toLowerCase().includes(q));
};
