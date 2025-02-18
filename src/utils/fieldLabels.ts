import { headersTXT } from "./csv";

export const fieldLabels: Record<string, string> = {
  conta: "Account",
  squad: "Squad",
  produto: "Product",
  vsl: "VSL/CallCenter",
  rede: "Channel",
  tipo_de_venda: "Sale Type",
  kit: "Kit Size",
  preco: "Price",
  handle: headersTXT[0],
  title: headersTXT[1],
  description: headersTXT[2],
  seo_title: headersTXT[3],
  seo_description: headersTXT[4],
  vendor: headersTXT[5],
  type: headersTXT[6],
  tags: headersTXT[7],
  active: headersTXT[8],
  option_1_name: headersTXT[9],
  option_1_value: headersTXT[10],
  option_2_name: headersTXT[11],
  option_2_value: headersTXT[12],
  option_3_name: headersTXT[13],
  option_3_value: headersTXT[14],
  variant_sku: headersTXT[15],
  variant_grams: headersTXT[16],
  variant_inventory_qty: headersTXT[17],
  variant_price: headersTXT[18],
  variant_compare_at_price: headersTXT[19],
  variant_requires_shipping: headersTXT[20],
  variant_taxable: headersTXT[21],
  inventory_policy: headersTXT[22],
  variant_barcode: headersTXT[23],
  variant_weight_unit: headersTXT[24],
  cost_per_item: headersTXT[25],
  length: headersTXT[26],
  width: headersTXT[27],
  height: headersTXT[28],
  dimension_unit: headersTXT[29],
};
