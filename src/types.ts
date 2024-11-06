// src/types.ts
export interface BaseData {
  id: string; // Common property for all data types
}

export type DeviceData = BaseData & {
  deviceCode: string;
  deviceName: string;
  ipAddress: string;
  serviceName: string;
  deviceType: string;
  accountName: string;
  password: string;
};

export type ServiceData = BaseData & {
  serviceCode: string;
  serviceName: string;
  serviceDescribe: string;
  autoIncreaseN1: string;
  autoIncreaseN2: string;
  prefix: string;
  reset: string;
};

export type LevelDetailProps = BaseData & {
  serialNumber: string;
  customerName: string;
  serviceName: string;
  issueTime: string;
  expirationTime: string;
  statusLevel: string;
  source: string;
  phoneNumber: string;
  email: string;
};

export type RoleData = BaseData & {
  roleName: string;
  roleDesscribe: string;
  permissionsA: string[];
  permissionsB: string[];
};

export type AccountData = BaseData & {
  accountName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  roleName: string;
  status: string;
};

// Union type for different data types
export type DataTypes =
  | DeviceData
  | ServiceData
  | LevelDetailProps
  | RoleData
  | AccountData;
