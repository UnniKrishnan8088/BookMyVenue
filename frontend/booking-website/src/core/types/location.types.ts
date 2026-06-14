export interface LocationDetails {
  type: string
  features: Feature[]
  query: Query
}

export interface Feature {
  type: string
  properties: Properties
  geometry: Geometry
  bbox: number[]
}

export interface Properties {
  datasource: Datasource
  name: string
  country: string
  country_code: string
  state: string
  county: string
  state_district: string
  city: string
  postcode: string
  district: string
  suburb: string
  street: string
  iso3166_2: string
  lon: number
  lat: number
  state_code: string
  county_code: string
  distance: number
  result_type: string
  formatted: string
  address_line1: string
  address_line2: string
  timezone: Timezone
  plus_code: string
  rank: Rank
  place_id: string
}

export interface Datasource {
  sourcename: string
  attribution: string
  license: string
  url: string
}

export interface Timezone {
  name: string
  offset_STD: string
  offset_STD_seconds: number
  offset_DST: string
  offset_DST_seconds: number
  abbreviation_STD: string
  abbreviation_DST: string
}

export interface Rank {
  importance: number
  popularity: number
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface Query {
  lat: number
  lon: number
  plus_code: string
}
