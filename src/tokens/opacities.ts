export type OpacityValueType = number;

export type OpacitiesType = {
  opaque: OpacityValueType;
  semiOpaque: OpacityValueType;
  intense: OpacityValueType;
  medium: OpacityValueType;
  light: OpacityValueType;
  semiTransparent: OpacityValueType;
  transparent: OpacityValueType;
};

export type OpacitySizesType = keyof OpacitiesType;

export const Opacities: OpacitiesType = {
  opaque: 1.0,
  semiOpaque: 0.8,
  intense: 0.6,
  medium: 0.4,
  light: 0.2,
  semiTransparent: 0.08,
  transparent: 0,
};
