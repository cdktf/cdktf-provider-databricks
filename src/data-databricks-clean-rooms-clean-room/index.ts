/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksCleanRoomsCleanRoomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#comment DataDatabricksCleanRoomsCleanRoom#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#name DataDatabricksCleanRoomsCleanRoom#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#owner DataDatabricksCleanRoomsCleanRoom#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#remote_detailed_info DataDatabricksCleanRoomsCleanRoom#remote_detailed_info}
  */
  readonly remoteDetailedInfo?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workspace_id DataDatabricksCleanRoomsCleanRoom#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataDatabricksCleanRoomsCleanRoomOutputCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#catalog_name DataDatabricksCleanRoomsCleanRoom#catalog_name}
  */
  readonly catalogName?: string;
}

export function dataDatabricksCleanRoomsCleanRoomOutputCatalogToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomOutputCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
  }
}


export function dataDatabricksCleanRoomsCleanRoomOutputCatalogToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomOutputCatalog): any {
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

export class DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomOutputCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomOutputCatalog | undefined) {
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
export interface DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}
  */
  readonly collaboratorAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}
  */
  readonly globalMetastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}
  */
  readonly inviteRecipientEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}
  */
  readonly inviteRecipientWorkspaceId?: number;
}

export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators | cdktf.IResolvable): any {
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


export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators | cdktf.IResolvable | undefined) {
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

  // collaborator_alias - computed: false, optional: false, required: true
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

  // invite_recipient_email - computed: false, optional: true, required: false
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference {
    return new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#compliance_standards DataDatabricksCleanRoomsCleanRoom#compliance_standards}
  */
  readonly complianceStandards?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#is_enabled DataDatabricksCleanRoomsCleanRoom#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_standards: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.complianceStandards),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile): any {
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile | undefined) {
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
export interface DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}
  */
  readonly collaboratorAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}
  */
  readonly globalMetastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}
  */
  readonly inviteRecipientEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}
  */
  readonly inviteRecipientWorkspaceId?: number;
}

export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator): any {
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


export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator): any {
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator | undefined) {
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
export interface DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#destination DataDatabricksCleanRoomsCleanRoom#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#protocol DataDatabricksCleanRoomsCleanRoom#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}
  */
  readonly type?: string;
}

export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations | cdktf.IResolvable): any {
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


export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations | cdktf.IResolvable | undefined) {
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

  // destination - computed: false, optional: true, required: false
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

  // protocol - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference {
    return new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_paths DataDatabricksCleanRoomsCleanRoom#allowed_paths}
  */
  readonly allowedPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_container DataDatabricksCleanRoomsCleanRoom#azure_container}
  */
  readonly azureContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_dns_zone DataDatabricksCleanRoomsCleanRoom#azure_dns_zone}
  */
  readonly azureDnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_account DataDatabricksCleanRoomsCleanRoom#azure_storage_account}
  */
  readonly azureStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_service DataDatabricksCleanRoomsCleanRoom#azure_storage_service}
  */
  readonly azureStorageService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#bucket_name DataDatabricksCleanRoomsCleanRoom#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}
  */
  readonly type?: string;
}

export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations | cdktf.IResolvable): any {
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


export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations | cdktf.IResolvable | undefined) {
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

  // allowed_paths - computed: false, optional: true, required: false
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

  // azure_container - computed: false, optional: true, required: false
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

  // azure_dns_zone - computed: false, optional: true, required: false
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

  // azure_storage_account - computed: false, optional: true, required: false
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

  // azure_storage_service - computed: false, optional: true, required: false
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

  // bucket_name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference {
    return new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode_type DataDatabricksCleanRoomsCleanRoom#log_only_mode_type}
  */
  readonly logOnlyModeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workloads DataDatabricksCleanRoomsCleanRoom#workloads}
  */
  readonly workloads?: string[];
}

export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_only_mode_type: cdktf.stringToTerraform(struct!.logOnlyModeType),
    workloads: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workloads),
  }
}


export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode | cdktf.IResolvable | undefined) {
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

  // log_only_mode_type - computed: false, optional: true, required: false
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

  // workloads - computed: false, optional: true, required: false
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
export interface DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_internet_destinations DataDatabricksCleanRoomsCleanRoom#allowed_internet_destinations}
  */
  readonly allowedInternetDestinations?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_storage_destinations DataDatabricksCleanRoomsCleanRoom#allowed_storage_destinations}
  */
  readonly allowedStorageDestinations?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode DataDatabricksCleanRoomsCleanRoom#log_only_mode}
  */
  readonly logOnlyMode?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#restriction_mode DataDatabricksCleanRoomsCleanRoom#restriction_mode}
  */
  readonly restrictionMode?: string;
}

export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_internet_destinations: cdktf.listMapper(dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsToTerraform, false)(struct!.allowedInternetDestinations),
    allowed_storage_destinations: cdktf.listMapper(dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsToTerraform, false)(struct!.allowedStorageDestinations),
    log_only_mode: dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeToTerraform(struct!.logOnlyMode),
    restriction_mode: cdktf.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_internet_destinations: {
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsToHclTerraform, false)(struct!.allowedInternetDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList",
    },
    allowed_storage_destinations: {
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsToHclTerraform, false)(struct!.allowedStorageDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList",
    },
    log_only_mode: {
      value: dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeToHclTerraform(struct!.logOnlyMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode",
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess | cdktf.IResolvable | undefined) {
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

  // allowed_internet_destinations - computed: false, optional: true, required: false
  private _allowedInternetDestinations = new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList(this, "allowed_internet_destinations", false);
  public get allowedInternetDestinations() {
    return this._allowedInternetDestinations;
  }
  public putAllowedInternetDestinations(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[] | cdktf.IResolvable) {
    this._allowedInternetDestinations.internalValue = value;
  }
  public resetAllowedInternetDestinations() {
    this._allowedInternetDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInternetDestinationsInput() {
    return this._allowedInternetDestinations.internalValue;
  }

  // allowed_storage_destinations - computed: false, optional: true, required: false
  private _allowedStorageDestinations = new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList(this, "allowed_storage_destinations", false);
  public get allowedStorageDestinations() {
    return this._allowedStorageDestinations;
  }
  public putAllowedStorageDestinations(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[] | cdktf.IResolvable) {
    this._allowedStorageDestinations.internalValue = value;
  }
  public resetAllowedStorageDestinations() {
    this._allowedStorageDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedStorageDestinationsInput() {
    return this._allowedStorageDestinations.internalValue;
  }

  // log_only_mode - computed: false, optional: true, required: false
  private _logOnlyMode = new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference(this, "log_only_mode");
  public get logOnlyMode() {
    return this._logOnlyMode;
  }
  public putLogOnlyMode(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode) {
    this._logOnlyMode.internalValue = value;
  }
  public resetLogOnlyMode() {
    this._logOnlyMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOnlyModeInput() {
    return this._logOnlyMode.internalValue;
  }

  // restriction_mode - computed: false, optional: true, required: false
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
export interface DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#internet_access DataDatabricksCleanRoomsCleanRoom#internet_access}
  */
  readonly internetAccess?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess;
}

export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internet_access: dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessToTerraform(struct!.internetAccess),
  }
}


export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internet_access: {
      value: dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessToHclTerraform(struct!.internetAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy | cdktf.IResolvable | undefined) {
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

  // internet_access - computed: false, optional: true, required: false
  private _internetAccess = new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference(this, "internet_access");
  public get internetAccess() {
    return this._internetAccess;
  }
  public putInternetAccess(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess) {
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
export interface DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#cloud_vendor DataDatabricksCleanRoomsCleanRoom#cloud_vendor}
  */
  readonly cloudVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborators DataDatabricksCleanRoomsCleanRoom#collaborators}
  */
  readonly collaborators?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#egress_network_policy DataDatabricksCleanRoomsCleanRoom#egress_network_policy}
  */
  readonly egressNetworkPolicy?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}
  */
  readonly region?: string;
}

export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoToTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_vendor: cdktf.stringToTerraform(struct!.cloudVendor),
    collaborators: cdktf.listMapper(dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsToTerraform, false)(struct!.collaborators),
    egress_network_policy: dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyToTerraform(struct!.egressNetworkPolicy),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoToHclTerraform(struct?: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsToHclTerraform, false)(struct!.collaborators),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList",
    },
    egress_network_policy: {
      value: dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyToHclTerraform(struct!.egressNetworkPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy",
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

export class DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo | cdktf.IResolvable | undefined) {
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

  // cloud_vendor - computed: false, optional: true, required: false
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

  // collaborators - computed: false, optional: true, required: false
  private _collaborators = new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList(this, "collaborators", false);
  public get collaborators() {
    return this._collaborators;
  }
  public putCollaborators(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators[] | cdktf.IResolvable) {
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
  private _complianceSecurityProfile = new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference(this, "compliance_security_profile");
  public get complianceSecurityProfile() {
    return this._complianceSecurityProfile;
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference(this, "creator");
  public get creator() {
    return this._creator;
  }

  // egress_network_policy - computed: false, optional: true, required: false
  private _egressNetworkPolicy = new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference(this, "egress_network_policy");
  public get egressNetworkPolicy() {
    return this._egressNetworkPolicy;
  }
  public putEgressNetworkPolicy(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy) {
    this._egressNetworkPolicy.internalValue = value;
  }
  public resetEgressNetworkPolicy() {
    this._egressNetworkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNetworkPolicyInput() {
    return this._egressNetworkPolicy.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room databricks_clean_rooms_clean_room}
*/
export class DataDatabricksCleanRoomsCleanRoom extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_clean_rooms_clean_room";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRoom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksCleanRoomsCleanRoom to import
  * @param importFromId The id of the existing DataDatabricksCleanRoomsCleanRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksCleanRoomsCleanRoom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_clean_rooms_clean_room", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room databricks_clean_rooms_clean_room} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksCleanRoomsCleanRoomConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksCleanRoomsCleanRoomConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_clean_rooms_clean_room',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.89.0',
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
    this._comment = config.comment;
    this._name = config.name;
    this._owner = config.owner;
    this._remoteDetailedInfo.internalValue = config.remoteDetailedInfo;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_restricted - computed: true, optional: false, required: false
  public get accessRestricted() {
    return this.getStringAttribute('access_restricted');
  }

  // comment - computed: false, optional: true, required: false
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

  // output_catalog - computed: true, optional: false, required: false
  private _outputCatalog = new DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference(this, "output_catalog");
  public get outputCatalog() {
    return this._outputCatalog;
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

  // remote_detailed_info - computed: false, optional: true, required: false
  private _remoteDetailedInfo = new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference(this, "remote_detailed_info");
  public get remoteDetailedInfo() {
    return this._remoteDetailedInfo;
  }
  public putRemoteDetailedInfo(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo) {
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

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      remote_detailed_info: dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoToTerraform(this._remoteDetailedInfo.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_detailed_info: {
        value: dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoToHclTerraform(this._remoteDetailedInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
