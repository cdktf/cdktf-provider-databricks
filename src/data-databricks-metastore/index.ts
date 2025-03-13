// https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksMetastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#id DataDatabricksMetastore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}
  */
  readonly region?: string;
  /**
  * metastore_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#metastore_info DataDatabricksMetastore#metastore_info}
  */
  readonly metastoreInfo?: DataDatabricksMetastoreMetastoreInfo;
}
export interface DataDatabricksMetastoreMetastoreInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#cloud DataDatabricksMetastore#cloud}
  */
  readonly cloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#created_at DataDatabricksMetastore#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#created_by DataDatabricksMetastore#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#default_data_access_config_id DataDatabricksMetastore#default_data_access_config_id}
  */
  readonly defaultDataAccessConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#delta_sharing_organization_name DataDatabricksMetastore#delta_sharing_organization_name}
  */
  readonly deltaSharingOrganizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksMetastore#delta_sharing_recipient_token_lifetime_in_seconds}
  */
  readonly deltaSharingRecipientTokenLifetimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#delta_sharing_scope DataDatabricksMetastore#delta_sharing_scope}
  */
  readonly deltaSharingScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#external_access_enabled DataDatabricksMetastore#external_access_enabled}
  */
  readonly externalAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#global_metastore_id DataDatabricksMetastore#global_metastore_id}
  */
  readonly globalMetastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#owner DataDatabricksMetastore#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#privilege_model_version DataDatabricksMetastore#privilege_model_version}
  */
  readonly privilegeModelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#storage_root DataDatabricksMetastore#storage_root}
  */
  readonly storageRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#storage_root_credential_id DataDatabricksMetastore#storage_root_credential_id}
  */
  readonly storageRootCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#storage_root_credential_name DataDatabricksMetastore#storage_root_credential_name}
  */
  readonly storageRootCredentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#updated_at DataDatabricksMetastore#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#updated_by DataDatabricksMetastore#updated_by}
  */
  readonly updatedBy?: string;
}

export function dataDatabricksMetastoreMetastoreInfoToTerraform(struct?: DataDatabricksMetastoreMetastoreInfoOutputReference | DataDatabricksMetastoreMetastoreInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud: cdktf.stringToTerraform(struct!.cloud),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    default_data_access_config_id: cdktf.stringToTerraform(struct!.defaultDataAccessConfigId),
    delta_sharing_organization_name: cdktf.stringToTerraform(struct!.deltaSharingOrganizationName),
    delta_sharing_recipient_token_lifetime_in_seconds: cdktf.numberToTerraform(struct!.deltaSharingRecipientTokenLifetimeInSeconds),
    delta_sharing_scope: cdktf.stringToTerraform(struct!.deltaSharingScope),
    external_access_enabled: cdktf.booleanToTerraform(struct!.externalAccessEnabled),
    global_metastore_id: cdktf.stringToTerraform(struct!.globalMetastoreId),
    metastore_id: cdktf.stringToTerraform(struct!.metastoreId),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    privilege_model_version: cdktf.stringToTerraform(struct!.privilegeModelVersion),
    region: cdktf.stringToTerraform(struct!.region),
    storage_root: cdktf.stringToTerraform(struct!.storageRoot),
    storage_root_credential_id: cdktf.stringToTerraform(struct!.storageRootCredentialId),
    storage_root_credential_name: cdktf.stringToTerraform(struct!.storageRootCredentialName),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
  }
}


export function dataDatabricksMetastoreMetastoreInfoToHclTerraform(struct?: DataDatabricksMetastoreMetastoreInfoOutputReference | DataDatabricksMetastoreMetastoreInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud: {
      value: cdktf.stringToHclTerraform(struct!.cloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_at: {
      value: cdktf.numberToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_data_access_config_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultDataAccessConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delta_sharing_organization_name: {
      value: cdktf.stringToHclTerraform(struct!.deltaSharingOrganizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delta_sharing_recipient_token_lifetime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.deltaSharingRecipientTokenLifetimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delta_sharing_scope: {
      value: cdktf.stringToHclTerraform(struct!.deltaSharingScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.externalAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_metastore_id: {
      value: cdktf.stringToHclTerraform(struct!.globalMetastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metastore_id: {
      value: cdktf.stringToHclTerraform(struct!.metastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege_model_version: {
      value: cdktf.stringToHclTerraform(struct!.privilegeModelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_root: {
      value: cdktf.stringToHclTerraform(struct!.storageRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_root_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.storageRootCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_root_credential_name: {
      value: cdktf.stringToHclTerraform(struct!.storageRootCredentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.numberToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    updated_by: {
      value: cdktf.stringToHclTerraform(struct!.updatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksMetastoreMetastoreInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksMetastoreMetastoreInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._defaultDataAccessConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDataAccessConfigId = this._defaultDataAccessConfigId;
    }
    if (this._deltaSharingOrganizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaSharingOrganizationName = this._deltaSharingOrganizationName;
    }
    if (this._deltaSharingRecipientTokenLifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaSharingRecipientTokenLifetimeInSeconds = this._deltaSharingRecipientTokenLifetimeInSeconds;
    }
    if (this._deltaSharingScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaSharingScope = this._deltaSharingScope;
    }
    if (this._externalAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAccessEnabled = this._externalAccessEnabled;
    }
    if (this._globalMetastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalMetastoreId = this._globalMetastoreId;
    }
    if (this._metastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreId = this._metastoreId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._privilegeModelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeModelVersion = this._privilegeModelVersion;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storageRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRoot = this._storageRoot;
    }
    if (this._storageRootCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRootCredentialId = this._storageRootCredentialId;
    }
    if (this._storageRootCredentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRootCredentialName = this._storageRootCredentialName;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksMetastoreMetastoreInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloud = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._defaultDataAccessConfigId = undefined;
      this._deltaSharingOrganizationName = undefined;
      this._deltaSharingRecipientTokenLifetimeInSeconds = undefined;
      this._deltaSharingScope = undefined;
      this._externalAccessEnabled = undefined;
      this._globalMetastoreId = undefined;
      this._metastoreId = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._privilegeModelVersion = undefined;
      this._region = undefined;
      this._storageRoot = undefined;
      this._storageRootCredentialId = undefined;
      this._storageRootCredentialName = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloud = value.cloud;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._defaultDataAccessConfigId = value.defaultDataAccessConfigId;
      this._deltaSharingOrganizationName = value.deltaSharingOrganizationName;
      this._deltaSharingRecipientTokenLifetimeInSeconds = value.deltaSharingRecipientTokenLifetimeInSeconds;
      this._deltaSharingScope = value.deltaSharingScope;
      this._externalAccessEnabled = value.externalAccessEnabled;
      this._globalMetastoreId = value.globalMetastoreId;
      this._metastoreId = value.metastoreId;
      this._name = value.name;
      this._owner = value.owner;
      this._privilegeModelVersion = value.privilegeModelVersion;
      this._region = value.region;
      this._storageRoot = value.storageRoot;
      this._storageRootCredentialId = value.storageRootCredentialId;
      this._storageRootCredentialName = value.storageRootCredentialName;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
    }
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // default_data_access_config_id - computed: false, optional: true, required: false
  private _defaultDataAccessConfigId?: string; 
  public get defaultDataAccessConfigId() {
    return this.getStringAttribute('default_data_access_config_id');
  }
  public set defaultDataAccessConfigId(value: string) {
    this._defaultDataAccessConfigId = value;
  }
  public resetDefaultDataAccessConfigId() {
    this._defaultDataAccessConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDataAccessConfigIdInput() {
    return this._defaultDataAccessConfigId;
  }

  // delta_sharing_organization_name - computed: false, optional: true, required: false
  private _deltaSharingOrganizationName?: string; 
  public get deltaSharingOrganizationName() {
    return this.getStringAttribute('delta_sharing_organization_name');
  }
  public set deltaSharingOrganizationName(value: string) {
    this._deltaSharingOrganizationName = value;
  }
  public resetDeltaSharingOrganizationName() {
    this._deltaSharingOrganizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSharingOrganizationNameInput() {
    return this._deltaSharingOrganizationName;
  }

  // delta_sharing_recipient_token_lifetime_in_seconds - computed: false, optional: true, required: false
  private _deltaSharingRecipientTokenLifetimeInSeconds?: number; 
  public get deltaSharingRecipientTokenLifetimeInSeconds() {
    return this.getNumberAttribute('delta_sharing_recipient_token_lifetime_in_seconds');
  }
  public set deltaSharingRecipientTokenLifetimeInSeconds(value: number) {
    this._deltaSharingRecipientTokenLifetimeInSeconds = value;
  }
  public resetDeltaSharingRecipientTokenLifetimeInSeconds() {
    this._deltaSharingRecipientTokenLifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSharingRecipientTokenLifetimeInSecondsInput() {
    return this._deltaSharingRecipientTokenLifetimeInSeconds;
  }

  // delta_sharing_scope - computed: false, optional: true, required: false
  private _deltaSharingScope?: string; 
  public get deltaSharingScope() {
    return this.getStringAttribute('delta_sharing_scope');
  }
  public set deltaSharingScope(value: string) {
    this._deltaSharingScope = value;
  }
  public resetDeltaSharingScope() {
    this._deltaSharingScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSharingScopeInput() {
    return this._deltaSharingScope;
  }

  // external_access_enabled - computed: false, optional: true, required: false
  private _externalAccessEnabled?: boolean | cdktf.IResolvable; 
  public get externalAccessEnabled() {
    return this.getBooleanAttribute('external_access_enabled');
  }
  public set externalAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._externalAccessEnabled = value;
  }
  public resetExternalAccessEnabled() {
    this._externalAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessEnabledInput() {
    return this._externalAccessEnabled;
  }

  // global_metastore_id - computed: false, optional: true, required: false
  private _globalMetastoreId?: string; 
  public get globalMetastoreId() {
    return this.getStringAttribute('global_metastore_id');
  }
  public set globalMetastoreId(value: string) {
    this._globalMetastoreId = value;
  }
  public resetGlobalMetastoreId() {
    this._globalMetastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalMetastoreIdInput() {
    return this._globalMetastoreId;
  }

  // metastore_id - computed: false, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // privilege_model_version - computed: false, optional: true, required: false
  private _privilegeModelVersion?: string; 
  public get privilegeModelVersion() {
    return this.getStringAttribute('privilege_model_version');
  }
  public set privilegeModelVersion(value: string) {
    this._privilegeModelVersion = value;
  }
  public resetPrivilegeModelVersion() {
    this._privilegeModelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeModelVersionInput() {
    return this._privilegeModelVersion;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_root - computed: false, optional: true, required: false
  private _storageRoot?: string; 
  public get storageRoot() {
    return this.getStringAttribute('storage_root');
  }
  public set storageRoot(value: string) {
    this._storageRoot = value;
  }
  public resetStorageRoot() {
    this._storageRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootInput() {
    return this._storageRoot;
  }

  // storage_root_credential_id - computed: false, optional: true, required: false
  private _storageRootCredentialId?: string; 
  public get storageRootCredentialId() {
    return this.getStringAttribute('storage_root_credential_id');
  }
  public set storageRootCredentialId(value: string) {
    this._storageRootCredentialId = value;
  }
  public resetStorageRootCredentialId() {
    this._storageRootCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootCredentialIdInput() {
    return this._storageRootCredentialId;
  }

  // storage_root_credential_name - computed: false, optional: true, required: false
  private _storageRootCredentialName?: string; 
  public get storageRootCredentialName() {
    return this.getStringAttribute('storage_root_credential_name');
  }
  public set storageRootCredentialName(value: string) {
    this._storageRootCredentialName = value;
  }
  public resetStorageRootCredentialName() {
    this._storageRootCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootCredentialNameInput() {
    return this._storageRootCredentialName;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // updated_by - computed: false, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore databricks_metastore}
*/
export class DataDatabricksMetastore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_metastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksMetastore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksMetastore to import
  * @param importFromId The id of the existing DataDatabricksMetastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksMetastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_metastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/metastore databricks_metastore} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksMetastoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksMetastoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_metastore',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.70.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._metastoreId = config.metastoreId;
    this._name = config.name;
    this._region = config.region;
    this._metastoreInfo.internalValue = config.metastoreInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metastore_id - computed: true, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // metastore_info - computed: false, optional: true, required: false
  private _metastoreInfo = new DataDatabricksMetastoreMetastoreInfoOutputReference(this, "metastore_info");
  public get metastoreInfo() {
    return this._metastoreInfo;
  }
  public putMetastoreInfo(value: DataDatabricksMetastoreMetastoreInfo) {
    this._metastoreInfo.internalValue = value;
  }
  public resetMetastoreInfo() {
    this._metastoreInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInfoInput() {
    return this._metastoreInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metastore_id: cdktf.stringToTerraform(this._metastoreId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      metastore_info: dataDatabricksMetastoreMetastoreInfoToTerraform(this._metastoreInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metastore_id: {
        value: cdktf.stringToHclTerraform(this._metastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metastore_info: {
        value: dataDatabricksMetastoreMetastoreInfoToHclTerraform(this._metastoreInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksMetastoreMetastoreInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
