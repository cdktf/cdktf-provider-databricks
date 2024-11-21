/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksRegisteredModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#include_aliases DataDatabricksRegisteredModel#include_aliases}
  */
  readonly includeAliases?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#include_browse DataDatabricksRegisteredModel#include_browse}
  */
  readonly includeBrowse?: boolean | cdktf.IResolvable;
  /**
  * model_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#model_info DataDatabricksRegisteredModel#model_info}
  */
  readonly modelInfo?: DataDatabricksRegisteredModelModelInfo[] | cdktf.IResolvable;
}
export interface DataDatabricksRegisteredModelModelInfoAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#alias_name DataDatabricksRegisteredModel#alias_name}
  */
  readonly aliasName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#version_num DataDatabricksRegisteredModel#version_num}
  */
  readonly versionNum?: number;
}

export function dataDatabricksRegisteredModelModelInfoAliasesToTerraform(struct?: DataDatabricksRegisteredModelModelInfoAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_name: cdktf.stringToTerraform(struct!.aliasName),
    version_num: cdktf.numberToTerraform(struct!.versionNum),
  }
}


export function dataDatabricksRegisteredModelModelInfoAliasesToHclTerraform(struct?: DataDatabricksRegisteredModelModelInfoAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_name: {
      value: cdktf.stringToHclTerraform(struct!.aliasName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_num: {
      value: cdktf.numberToHclTerraform(struct!.versionNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelModelInfoAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelModelInfoAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasName = this._aliasName;
    }
    if (this._versionNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNum = this._versionNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelModelInfoAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasName = undefined;
      this._versionNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasName = value.aliasName;
      this._versionNum = value.versionNum;
    }
  }

  // alias_name - computed: false, optional: true, required: false
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  public resetAliasName() {
    this._aliasName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
  }

  // version_num - computed: false, optional: true, required: false
  private _versionNum?: number; 
  public get versionNum() {
    return this.getNumberAttribute('version_num');
  }
  public set versionNum(value: number) {
    this._versionNum = value;
  }
  public resetVersionNum() {
    this._versionNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNumInput() {
    return this._versionNum;
  }
}

export class DataDatabricksRegisteredModelModelInfoAliasesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelModelInfoAliases[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelModelInfoAliasesOutputReference {
    return new DataDatabricksRegisteredModelModelInfoAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelModelInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#browse_only DataDatabricksRegisteredModel#browse_only}
  */
  readonly browseOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#catalog_name DataDatabricksRegisteredModel#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#comment DataDatabricksRegisteredModel#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#created_at DataDatabricksRegisteredModel#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#created_by DataDatabricksRegisteredModel#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#metastore_id DataDatabricksRegisteredModel#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#name DataDatabricksRegisteredModel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#owner DataDatabricksRegisteredModel#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#schema_name DataDatabricksRegisteredModel#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#storage_location DataDatabricksRegisteredModel#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#updated_at DataDatabricksRegisteredModel#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#updated_by DataDatabricksRegisteredModel#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#aliases DataDatabricksRegisteredModel#aliases}
  */
  readonly aliases?: DataDatabricksRegisteredModelModelInfoAliases[] | cdktf.IResolvable;
}

export function dataDatabricksRegisteredModelModelInfoToTerraform(struct?: DataDatabricksRegisteredModelModelInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browse_only: cdktf.booleanToTerraform(struct!.browseOnly),
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    comment: cdktf.stringToTerraform(struct!.comment),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    metastore_id: cdktf.stringToTerraform(struct!.metastoreId),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    storage_location: cdktf.stringToTerraform(struct!.storageLocation),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
    aliases: cdktf.listMapper(dataDatabricksRegisteredModelModelInfoAliasesToTerraform, true)(struct!.aliases),
  }
}


export function dataDatabricksRegisteredModelModelInfoToHclTerraform(struct?: DataDatabricksRegisteredModelModelInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browse_only: {
      value: cdktf.booleanToHclTerraform(struct!.browseOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_location: {
      value: cdktf.stringToHclTerraform(struct!.storageLocation),
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
    aliases: {
      value: cdktf.listMapperHcl(dataDatabricksRegisteredModelModelInfoAliasesToHclTerraform, true)(struct!.aliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelModelInfoAliasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelModelInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelModelInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browseOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.browseOnly = this._browseOnly;
    }
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
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
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._storageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    if (this._aliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelModelInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._browseOnly = undefined;
      this._catalogName = undefined;
      this._comment = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._fullName = undefined;
      this._metastoreId = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._schemaName = undefined;
      this._storageLocation = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
      this._aliases.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._browseOnly = value.browseOnly;
      this._catalogName = value.catalogName;
      this._comment = value.comment;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._fullName = value.fullName;
      this._metastoreId = value.metastoreId;
      this._name = value.name;
      this._owner = value.owner;
      this._schemaName = value.schemaName;
      this._storageLocation = value.storageLocation;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
      this._aliases.internalValue = value.aliases;
    }
  }

  // browse_only - computed: false, optional: true, required: false
  private _browseOnly?: boolean | cdktf.IResolvable; 
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
  }
  public set browseOnly(value: boolean | cdktf.IResolvable) {
    this._browseOnly = value;
  }
  public resetBrowseOnly() {
    this._browseOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browseOnlyInput() {
    return this._browseOnly;
  }

  // catalog_name - computed: false, optional: true, required: false
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

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // storage_location - computed: false, optional: true, required: false
  private _storageLocation?: string; 
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }
  public set storageLocation(value: string) {
    this._storageLocation = value;
  }
  public resetStorageLocation() {
    this._storageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation;
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

  // aliases - computed: false, optional: true, required: false
  private _aliases = new DataDatabricksRegisteredModelModelInfoAliasesList(this, "aliases", false);
  public get aliases() {
    return this._aliases;
  }
  public putAliases(value: DataDatabricksRegisteredModelModelInfoAliases[] | cdktf.IResolvable) {
    this._aliases.internalValue = value;
  }
  public resetAliases() {
    this._aliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases.internalValue;
  }
}

export class DataDatabricksRegisteredModelModelInfoList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelModelInfo[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelModelInfoOutputReference {
    return new DataDatabricksRegisteredModelModelInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model databricks_registered_model}
*/
export class DataDatabricksRegisteredModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_registered_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksRegisteredModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksRegisteredModel to import
  * @param importFromId The id of the existing DataDatabricksRegisteredModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksRegisteredModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_registered_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/data-sources/registered_model databricks_registered_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksRegisteredModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksRegisteredModelConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_registered_model',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.59.0',
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
    this._fullName = config.fullName;
    this._includeAliases = config.includeAliases;
    this._includeBrowse = config.includeBrowse;
    this._modelInfo.internalValue = config.modelInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // full_name - computed: false, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // include_aliases - computed: false, optional: true, required: false
  private _includeAliases?: boolean | cdktf.IResolvable; 
  public get includeAliases() {
    return this.getBooleanAttribute('include_aliases');
  }
  public set includeAliases(value: boolean | cdktf.IResolvable) {
    this._includeAliases = value;
  }
  public resetIncludeAliases() {
    this._includeAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAliasesInput() {
    return this._includeAliases;
  }

  // include_browse - computed: false, optional: true, required: false
  private _includeBrowse?: boolean | cdktf.IResolvable; 
  public get includeBrowse() {
    return this.getBooleanAttribute('include_browse');
  }
  public set includeBrowse(value: boolean | cdktf.IResolvable) {
    this._includeBrowse = value;
  }
  public resetIncludeBrowse() {
    this._includeBrowse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBrowseInput() {
    return this._includeBrowse;
  }

  // model_info - computed: false, optional: true, required: false
  private _modelInfo = new DataDatabricksRegisteredModelModelInfoList(this, "model_info", false);
  public get modelInfo() {
    return this._modelInfo;
  }
  public putModelInfo(value: DataDatabricksRegisteredModelModelInfo[] | cdktf.IResolvable) {
    this._modelInfo.internalValue = value;
  }
  public resetModelInfo() {
    this._modelInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInfoInput() {
    return this._modelInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_name: cdktf.stringToTerraform(this._fullName),
      include_aliases: cdktf.booleanToTerraform(this._includeAliases),
      include_browse: cdktf.booleanToTerraform(this._includeBrowse),
      model_info: cdktf.listMapper(dataDatabricksRegisteredModelModelInfoToTerraform, true)(this._modelInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_aliases: {
        value: cdktf.booleanToHclTerraform(this._includeAliases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_browse: {
        value: cdktf.booleanToHclTerraform(this._includeBrowse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      model_info: {
        value: cdktf.listMapperHcl(dataDatabricksRegisteredModelModelInfoToHclTerraform, true)(this._modelInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksRegisteredModelModelInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
