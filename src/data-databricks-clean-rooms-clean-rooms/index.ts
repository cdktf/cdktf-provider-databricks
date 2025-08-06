/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksCleanRoomsCleanRoomsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#catalog_name DataDatabricksCleanRoomsCleanRooms#catalog_name}
  */
  readonly catalogName?: string;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
    }
  }

  // catalog_name - computed: true, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}
  */
  readonly collaboratorAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}
  */
  readonly globalMetastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}
  */
  readonly inviteRecipientEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}
  */
  readonly inviteRecipientWorkspaceId?: number;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collaborator_alias: cdktf.stringToTerraform(struct!.collaboratorAlias),
    global_metastore_id: cdktf.stringToTerraform(struct!.globalMetastoreId),
    invite_recipient_email: cdktf.stringToTerraform(struct!.inviteRecipientEmail),
    invite_recipient_workspace_id: cdktf.numberToTerraform(struct!.inviteRecipientWorkspaceId),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collaborator_alias: {
      value: cdktf.stringToHclTerraform(struct!.collaboratorAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_metastore_id: {
      value: cdktf.stringToHclTerraform(struct!.globalMetastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_recipient_email: {
      value: cdktf.stringToHclTerraform(struct!.inviteRecipientEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_recipient_workspace_id: {
      value: cdktf.numberToHclTerraform(struct!.inviteRecipientWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collaboratorAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.collaboratorAlias = this._collaboratorAlias;
    }
    if (this._globalMetastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalMetastoreId = this._globalMetastoreId;
    }
    if (this._inviteRecipientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteRecipientEmail = this._inviteRecipientEmail;
    }
    if (this._inviteRecipientWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteRecipientWorkspaceId = this._inviteRecipientWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collaboratorAlias = undefined;
      this._globalMetastoreId = undefined;
      this._inviteRecipientEmail = undefined;
      this._inviteRecipientWorkspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collaboratorAlias = value.collaboratorAlias;
      this._globalMetastoreId = value.globalMetastoreId;
      this._inviteRecipientEmail = value.inviteRecipientEmail;
      this._inviteRecipientWorkspaceId = value.inviteRecipientWorkspaceId;
    }
  }

  // collaborator_alias - computed: true, optional: false, required: true
  private _collaboratorAlias?: string; 
  public get collaboratorAlias() {
    return this.getStringAttribute('collaborator_alias');
  }
  public set collaboratorAlias(value: string) {
    this._collaboratorAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collaboratorAliasInput() {
    return this._collaboratorAlias;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // global_metastore_id - computed: true, optional: true, required: false
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

  // invite_recipient_email - computed: true, optional: true, required: false
  private _inviteRecipientEmail?: string; 
  public get inviteRecipientEmail() {
    return this.getStringAttribute('invite_recipient_email');
  }
  public set inviteRecipientEmail(value: string) {
    this._inviteRecipientEmail = value;
  }
  public resetInviteRecipientEmail() {
    this._inviteRecipientEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteRecipientEmailInput() {
    return this._inviteRecipientEmail;
  }

  // invite_recipient_workspace_id - computed: true, optional: true, required: false
  private _inviteRecipientWorkspaceId?: number; 
  public get inviteRecipientWorkspaceId() {
    return this.getNumberAttribute('invite_recipient_workspace_id');
  }
  public set inviteRecipientWorkspaceId(value: number) {
    this._inviteRecipientWorkspaceId = value;
  }
  public resetInviteRecipientWorkspaceId() {
    this._inviteRecipientWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteRecipientWorkspaceIdInput() {
    return this._inviteRecipientWorkspaceId;
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference {
    return new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#compliance_standards DataDatabricksCleanRoomsCleanRooms#compliance_standards}
  */
  readonly complianceStandards?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#is_enabled DataDatabricksCleanRoomsCleanRooms#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_standards: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.complianceStandards),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliance_standards: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.complianceStandards),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complianceStandards !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStandards = this._complianceStandards;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complianceStandards = undefined;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complianceStandards = value.complianceStandards;
      this._isEnabled = value.isEnabled;
    }
  }

  // compliance_standards - computed: true, optional: true, required: false
  private _complianceStandards?: string[]; 
  public get complianceStandards() {
    return this.getListAttribute('compliance_standards');
  }
  public set complianceStandards(value: string[]) {
    this._complianceStandards = value;
  }
  public resetComplianceStandards() {
    this._complianceStandards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStandardsInput() {
    return this._complianceStandards;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}
  */
  readonly collaboratorAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}
  */
  readonly globalMetastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}
  */
  readonly inviteRecipientEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}
  */
  readonly inviteRecipientWorkspaceId?: number;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collaborator_alias: cdktf.stringToTerraform(struct!.collaboratorAlias),
    global_metastore_id: cdktf.stringToTerraform(struct!.globalMetastoreId),
    invite_recipient_email: cdktf.stringToTerraform(struct!.inviteRecipientEmail),
    invite_recipient_workspace_id: cdktf.numberToTerraform(struct!.inviteRecipientWorkspaceId),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collaborator_alias: {
      value: cdktf.stringToHclTerraform(struct!.collaboratorAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_metastore_id: {
      value: cdktf.stringToHclTerraform(struct!.globalMetastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_recipient_email: {
      value: cdktf.stringToHclTerraform(struct!.inviteRecipientEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_recipient_workspace_id: {
      value: cdktf.numberToHclTerraform(struct!.inviteRecipientWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collaboratorAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.collaboratorAlias = this._collaboratorAlias;
    }
    if (this._globalMetastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalMetastoreId = this._globalMetastoreId;
    }
    if (this._inviteRecipientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteRecipientEmail = this._inviteRecipientEmail;
    }
    if (this._inviteRecipientWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteRecipientWorkspaceId = this._inviteRecipientWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collaboratorAlias = undefined;
      this._globalMetastoreId = undefined;
      this._inviteRecipientEmail = undefined;
      this._inviteRecipientWorkspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collaboratorAlias = value.collaboratorAlias;
      this._globalMetastoreId = value.globalMetastoreId;
      this._inviteRecipientEmail = value.inviteRecipientEmail;
      this._inviteRecipientWorkspaceId = value.inviteRecipientWorkspaceId;
    }
  }

  // collaborator_alias - computed: true, optional: false, required: true
  private _collaboratorAlias?: string; 
  public get collaboratorAlias() {
    return this.getStringAttribute('collaborator_alias');
  }
  public set collaboratorAlias(value: string) {
    this._collaboratorAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collaboratorAliasInput() {
    return this._collaboratorAlias;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // global_metastore_id - computed: true, optional: true, required: false
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

  // invite_recipient_email - computed: true, optional: true, required: false
  private _inviteRecipientEmail?: string; 
  public get inviteRecipientEmail() {
    return this.getStringAttribute('invite_recipient_email');
  }
  public set inviteRecipientEmail(value: string) {
    this._inviteRecipientEmail = value;
  }
  public resetInviteRecipientEmail() {
    this._inviteRecipientEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteRecipientEmailInput() {
    return this._inviteRecipientEmail;
  }

  // invite_recipient_workspace_id - computed: true, optional: true, required: false
  private _inviteRecipientWorkspaceId?: number; 
  public get inviteRecipientWorkspaceId() {
    return this.getNumberAttribute('invite_recipient_workspace_id');
  }
  public set inviteRecipientWorkspaceId(value: number) {
    this._inviteRecipientWorkspaceId = value;
  }
  public resetInviteRecipientWorkspaceId() {
    this._inviteRecipientWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteRecipientWorkspaceIdInput() {
    return this._inviteRecipientWorkspaceId;
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#destination DataDatabricksCleanRoomsCleanRooms#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#protocol DataDatabricksCleanRoomsCleanRooms#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}
  */
  readonly type?: string;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._protocol = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._protocol = value.protocol;
      this._type = value.type;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference {
    return new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#allowed_paths DataDatabricksCleanRoomsCleanRooms#allowed_paths}
  */
  readonly allowedPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_container DataDatabricksCleanRoomsCleanRooms#azure_container}
  */
  readonly azureContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_dns_zone DataDatabricksCleanRoomsCleanRooms#azure_dns_zone}
  */
  readonly azureDnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_storage_account DataDatabricksCleanRoomsCleanRooms#azure_storage_account}
  */
  readonly azureStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_storage_service DataDatabricksCleanRoomsCleanRooms#azure_storage_service}
  */
  readonly azureStorageService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#bucket_name DataDatabricksCleanRoomsCleanRooms#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}
  */
  readonly type?: string;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPaths),
    azure_container: cdktf.stringToTerraform(struct!.azureContainer),
    azure_dns_zone: cdktf.stringToTerraform(struct!.azureDnsZone),
    azure_storage_account: cdktf.stringToTerraform(struct!.azureStorageAccount),
    azure_storage_service: cdktf.stringToTerraform(struct!.azureStorageService),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    azure_container: {
      value: cdktf.stringToHclTerraform(struct!.azureContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_dns_zone: {
      value: cdktf.stringToHclTerraform(struct!.azureDnsZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_account: {
      value: cdktf.stringToHclTerraform(struct!.azureStorageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_service: {
      value: cdktf.stringToHclTerraform(struct!.azureStorageService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPaths = this._allowedPaths;
    }
    if (this._azureContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureContainer = this._azureContainer;
    }
    if (this._azureDnsZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDnsZone = this._azureDnsZone;
    }
    if (this._azureStorageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageAccount = this._azureStorageAccount;
    }
    if (this._azureStorageService !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageService = this._azureStorageService;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedPaths = undefined;
      this._azureContainer = undefined;
      this._azureDnsZone = undefined;
      this._azureStorageAccount = undefined;
      this._azureStorageService = undefined;
      this._bucketName = undefined;
      this._region = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedPaths = value.allowedPaths;
      this._azureContainer = value.azureContainer;
      this._azureDnsZone = value.azureDnsZone;
      this._azureStorageAccount = value.azureStorageAccount;
      this._azureStorageService = value.azureStorageService;
      this._bucketName = value.bucketName;
      this._region = value.region;
      this._type = value.type;
    }
  }

  // allowed_paths - computed: true, optional: true, required: false
  private _allowedPaths?: string[]; 
  public get allowedPaths() {
    return this.getListAttribute('allowed_paths');
  }
  public set allowedPaths(value: string[]) {
    this._allowedPaths = value;
  }
  public resetAllowedPaths() {
    this._allowedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPathsInput() {
    return this._allowedPaths;
  }

  // azure_container - computed: true, optional: true, required: false
  private _azureContainer?: string; 
  public get azureContainer() {
    return this.getStringAttribute('azure_container');
  }
  public set azureContainer(value: string) {
    this._azureContainer = value;
  }
  public resetAzureContainer() {
    this._azureContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureContainerInput() {
    return this._azureContainer;
  }

  // azure_dns_zone - computed: true, optional: true, required: false
  private _azureDnsZone?: string; 
  public get azureDnsZone() {
    return this.getStringAttribute('azure_dns_zone');
  }
  public set azureDnsZone(value: string) {
    this._azureDnsZone = value;
  }
  public resetAzureDnsZone() {
    this._azureDnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDnsZoneInput() {
    return this._azureDnsZone;
  }

  // azure_storage_account - computed: true, optional: true, required: false
  private _azureStorageAccount?: string; 
  public get azureStorageAccount() {
    return this.getStringAttribute('azure_storage_account');
  }
  public set azureStorageAccount(value: string) {
    this._azureStorageAccount = value;
  }
  public resetAzureStorageAccount() {
    this._azureStorageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccountInput() {
    return this._azureStorageAccount;
  }

  // azure_storage_service - computed: true, optional: true, required: false
  private _azureStorageService?: string; 
  public get azureStorageService() {
    return this.getStringAttribute('azure_storage_service');
  }
  public set azureStorageService(value: string) {
    this._azureStorageService = value;
  }
  public resetAzureStorageService() {
    this._azureStorageService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageServiceInput() {
    return this._azureStorageService;
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference {
    return new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#log_only_mode_type DataDatabricksCleanRoomsCleanRooms#log_only_mode_type}
  */
  readonly logOnlyModeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#workloads DataDatabricksCleanRoomsCleanRooms#workloads}
  */
  readonly workloads?: string[];
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_only_mode_type: cdktf.stringToTerraform(struct!.logOnlyModeType),
    workloads: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workloads),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_only_mode_type: {
      value: cdktf.stringToHclTerraform(struct!.logOnlyModeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workloads: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workloads),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logOnlyModeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOnlyModeType = this._logOnlyModeType;
    }
    if (this._workloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloads = this._workloads;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logOnlyModeType = undefined;
      this._workloads = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logOnlyModeType = value.logOnlyModeType;
      this._workloads = value.workloads;
    }
  }

  // log_only_mode_type - computed: true, optional: true, required: false
  private _logOnlyModeType?: string; 
  public get logOnlyModeType() {
    return this.getStringAttribute('log_only_mode_type');
  }
  public set logOnlyModeType(value: string) {
    this._logOnlyModeType = value;
  }
  public resetLogOnlyModeType() {
    this._logOnlyModeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOnlyModeTypeInput() {
    return this._logOnlyModeType;
  }

  // workloads - computed: true, optional: true, required: false
  private _workloads?: string[]; 
  public get workloads() {
    return this.getListAttribute('workloads');
  }
  public set workloads(value: string[]) {
    this._workloads = value;
  }
  public resetWorkloads() {
    this._workloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadsInput() {
    return this._workloads;
  }
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#allowed_internet_destinations DataDatabricksCleanRoomsCleanRooms#allowed_internet_destinations}
  */
  readonly allowedInternetDestinations?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#allowed_storage_destinations DataDatabricksCleanRoomsCleanRooms#allowed_storage_destinations}
  */
  readonly allowedStorageDestinations?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#log_only_mode DataDatabricksCleanRoomsCleanRooms#log_only_mode}
  */
  readonly logOnlyMode?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#restriction_mode DataDatabricksCleanRoomsCleanRooms#restriction_mode}
  */
  readonly restrictionMode?: string;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_internet_destinations: cdktf.listMapper(dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsToTerraform, false)(struct!.allowedInternetDestinations),
    allowed_storage_destinations: cdktf.listMapper(dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsToTerraform, false)(struct!.allowedStorageDestinations),
    log_only_mode: dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeToTerraform(struct!.logOnlyMode),
    restriction_mode: cdktf.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_internet_destinations: {
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsToHclTerraform, false)(struct!.allowedInternetDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList",
    },
    allowed_storage_destinations: {
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsToHclTerraform, false)(struct!.allowedStorageDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList",
    },
    log_only_mode: {
      value: dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeToHclTerraform(struct!.logOnlyMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode",
    },
    restriction_mode: {
      value: cdktf.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedInternetDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInternetDestinations = this._allowedInternetDestinations?.internalValue;
    }
    if (this._allowedStorageDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedStorageDestinations = this._allowedStorageDestinations?.internalValue;
    }
    if (this._logOnlyMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOnlyMode = this._logOnlyMode?.internalValue;
    }
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedInternetDestinations.internalValue = undefined;
      this._allowedStorageDestinations.internalValue = undefined;
      this._logOnlyMode.internalValue = undefined;
      this._restrictionMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedInternetDestinations.internalValue = value.allowedInternetDestinations;
      this._allowedStorageDestinations.internalValue = value.allowedStorageDestinations;
      this._logOnlyMode.internalValue = value.logOnlyMode;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // allowed_internet_destinations - computed: true, optional: true, required: false
  private _allowedInternetDestinations = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList(this, "allowed_internet_destinations", false);
  public get allowedInternetDestinations() {
    return this._allowedInternetDestinations;
  }
  public putAllowedInternetDestinations(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[] | cdktf.IResolvable) {
    this._allowedInternetDestinations.internalValue = value;
  }
  public resetAllowedInternetDestinations() {
    this._allowedInternetDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInternetDestinationsInput() {
    return this._allowedInternetDestinations.internalValue;
  }

  // allowed_storage_destinations - computed: true, optional: true, required: false
  private _allowedStorageDestinations = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList(this, "allowed_storage_destinations", false);
  public get allowedStorageDestinations() {
    return this._allowedStorageDestinations;
  }
  public putAllowedStorageDestinations(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[] | cdktf.IResolvable) {
    this._allowedStorageDestinations.internalValue = value;
  }
  public resetAllowedStorageDestinations() {
    this._allowedStorageDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedStorageDestinationsInput() {
    return this._allowedStorageDestinations.internalValue;
  }

  // log_only_mode - computed: true, optional: true, required: false
  private _logOnlyMode = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference(this, "log_only_mode");
  public get logOnlyMode() {
    return this._logOnlyMode;
  }
  public putLogOnlyMode(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode) {
    this._logOnlyMode.internalValue = value;
  }
  public resetLogOnlyMode() {
    this._logOnlyMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOnlyModeInput() {
    return this._logOnlyMode.internalValue;
  }

  // restriction_mode - computed: true, optional: true, required: false
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  public resetRestrictionMode() {
    this._restrictionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#internet_access DataDatabricksCleanRoomsCleanRooms#internet_access}
  */
  readonly internetAccess?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internet_access: dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessToTerraform(struct!.internetAccess),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internet_access: {
      value: dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessToHclTerraform(struct!.internetAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internetAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetAccess = this._internetAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internetAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internetAccess.internalValue = value.internetAccess;
    }
  }

  // internet_access - computed: true, optional: true, required: false
  private _internetAccess = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference(this, "internet_access");
  public get internetAccess() {
    return this._internetAccess;
  }
  public putInternetAccess(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess) {
    this._internetAccess.internalValue = value;
  }
  public resetInternetAccess() {
    this._internetAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAccessInput() {
    return this._internetAccess.internalValue;
  }
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#cloud_vendor DataDatabricksCleanRoomsCleanRooms#cloud_vendor}
  */
  readonly cloudVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#collaborators DataDatabricksCleanRoomsCleanRooms#collaborators}
  */
  readonly collaborators?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#egress_network_policy DataDatabricksCleanRoomsCleanRooms#egress_network_policy}
  */
  readonly egressNetworkPolicy?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}
  */
  readonly region?: string;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_vendor: cdktf.stringToTerraform(struct!.cloudVendor),
    collaborators: cdktf.listMapper(dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsToTerraform, false)(struct!.collaborators),
    egress_network_policy: dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyToTerraform(struct!.egressNetworkPolicy),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_vendor: {
      value: cdktf.stringToHclTerraform(struct!.cloudVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collaborators: {
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsToHclTerraform, false)(struct!.collaborators),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList",
    },
    egress_network_policy: {
      value: dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyToHclTerraform(struct!.egressNetworkPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudVendor = this._cloudVendor;
    }
    if (this._collaborators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collaborators = this._collaborators?.internalValue;
    }
    if (this._egressNetworkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressNetworkPolicy = this._egressNetworkPolicy?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudVendor = undefined;
      this._collaborators.internalValue = undefined;
      this._egressNetworkPolicy.internalValue = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudVendor = value.cloudVendor;
      this._collaborators.internalValue = value.collaborators;
      this._egressNetworkPolicy.internalValue = value.egressNetworkPolicy;
      this._region = value.region;
    }
  }

  // central_clean_room_id - computed: true, optional: false, required: false
  public get centralCleanRoomId() {
    return this.getStringAttribute('central_clean_room_id');
  }

  // cloud_vendor - computed: true, optional: true, required: false
  private _cloudVendor?: string; 
  public get cloudVendor() {
    return this.getStringAttribute('cloud_vendor');
  }
  public set cloudVendor(value: string) {
    this._cloudVendor = value;
  }
  public resetCloudVendor() {
    this._cloudVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudVendorInput() {
    return this._cloudVendor;
  }

  // collaborators - computed: true, optional: true, required: false
  private _collaborators = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList(this, "collaborators", false);
  public get collaborators() {
    return this._collaborators;
  }
  public putCollaborators(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators[] | cdktf.IResolvable) {
    this._collaborators.internalValue = value;
  }
  public resetCollaborators() {
    this._collaborators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaboratorsInput() {
    return this._collaborators.internalValue;
  }

  // compliance_security_profile - computed: true, optional: false, required: false
  private _complianceSecurityProfile = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference(this, "compliance_security_profile");
  public get complianceSecurityProfile() {
    return this._complianceSecurityProfile;
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference(this, "creator");
  public get creator() {
    return this._creator;
  }

  // egress_network_policy - computed: true, optional: true, required: false
  private _egressNetworkPolicy = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference(this, "egress_network_policy");
  public get egressNetworkPolicy() {
    return this._egressNetworkPolicy;
  }
  public putEgressNetworkPolicy(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy) {
    this._egressNetworkPolicy.internalValue = value;
  }
  public resetEgressNetworkPolicy() {
    this._egressNetworkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNetworkPolicyInput() {
    return this._egressNetworkPolicy.internalValue;
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
}
export interface DataDatabricksCleanRoomsCleanRoomsCleanRooms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#comment DataDatabricksCleanRoomsCleanRooms#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#name DataDatabricksCleanRoomsCleanRooms#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#owner DataDatabricksCleanRoomsCleanRooms#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#remote_detailed_info DataDatabricksCleanRoomsCleanRooms#remote_detailed_info}
  */
  readonly remoteDetailedInfo?: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo;
}

export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRooms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    remote_detailed_info: dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoToTerraform(struct!.remoteDetailedInfo),
  }
}


export function dataDatabricksCleanRoomsCleanRoomsCleanRoomsToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomsCleanRooms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    remote_detailed_info: {
      value: dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoToHclTerraform(struct!.remoteDetailedInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomsCleanRooms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._remoteDetailedInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDetailedInfo = this._remoteDetailedInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomsCleanRooms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._remoteDetailedInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._name = value.name;
      this._owner = value.owner;
      this._remoteDetailedInfo.internalValue = value.remoteDetailedInfo;
    }
  }

  // access_restricted - computed: true, optional: false, required: false
  public get accessRestricted() {
    return this.getStringAttribute('access_restricted');
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // local_collaborator_alias - computed: true, optional: false, required: false
  public get localCollaboratorAlias() {
    return this.getStringAttribute('local_collaborator_alias');
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

  // output_catalog - computed: true, optional: false, required: false
  private _outputCatalog = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference(this, "output_catalog");
  public get outputCatalog() {
    return this._outputCatalog;
  }

  // owner - computed: true, optional: true, required: false
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

  // remote_detailed_info - computed: true, optional: true, required: false
  private _remoteDetailedInfo = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference(this, "remote_detailed_info");
  public get remoteDetailedInfo() {
    return this._remoteDetailedInfo;
  }
  public putRemoteDetailedInfo(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo) {
    this._remoteDetailedInfo.internalValue = value;
  }
  public resetRemoteDetailedInfo() {
    this._remoteDetailedInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDetailedInfoInput() {
    return this._remoteDetailedInfo.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
}

export class DataDatabricksCleanRoomsCleanRoomsCleanRoomsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomsCleanRoomsCleanRooms[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference {
    return new DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms databricks_clean_rooms_clean_rooms}
*/
export class DataDatabricksCleanRoomsCleanRooms extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_clean_rooms_clean_rooms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRooms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksCleanRoomsCleanRooms to import
  * @param importFromId The id of the existing DataDatabricksCleanRoomsCleanRooms that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksCleanRoomsCleanRooms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_clean_rooms_clean_rooms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms databricks_clean_rooms_clean_rooms} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksCleanRoomsCleanRoomsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksCleanRoomsCleanRoomsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_clean_rooms_clean_rooms',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.86.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clean_rooms - computed: true, optional: false, required: false
  private _cleanRooms = new DataDatabricksCleanRoomsCleanRoomsCleanRoomsList(this, "clean_rooms", false);
  public get cleanRooms() {
    return this._cleanRooms;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
