/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#asset_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#asset_type}
  */
  readonly assetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#clean_room_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#clean_room_name}
  */
  readonly cleanRoomName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table}
  */
  readonly foreignTable?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table_local_details}
  */
  readonly foreignTableLocalDetails?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#notebook DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#notebook}
  */
  readonly notebook?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table}
  */
  readonly table?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table_local_details}
  */
  readonly tableLocalDetails?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view}
  */
  readonly view?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view_local_details}
  */
  readonly viewLocalDetails?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#volume_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#volume_local_details}
  */
  readonly volumeLocalDetails?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#workspace_id DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#using_column_names}
  */
  readonly usingColumnNames?: string[];
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    using_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usingColumnNames),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using_column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usingColumnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._usingColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingColumnNames = this._usingColumnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._usingColumnNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._usingColumnNames = value.usingColumnNames;
    }
  }

  // function_name - computed: true, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // using_column_names - computed: true, optional: true, required: false
  private _usingColumnNames?: string[]; 
  public get usingColumnNames() {
    return this.getListAttribute('using_column_names');
  }
  public set usingColumnNames(value: string[]) {
    this._usingColumnNames = value;
  }
  public resetUsingColumnNames() {
    this._usingColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingColumnNamesInput() {
    return this._usingColumnNames;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#mask}
  */
  readonly mask?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partition_index}
  */
  readonly partitionIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_text}
  */
  readonly typeText?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    mask: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskToTerraform(struct!.mask),
    name: cdktf.stringToTerraform(struct!.name),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    partition_index: cdktf.numberToTerraform(struct!.partitionIndex),
    position: cdktf.numberToTerraform(struct!.position),
    type_interval_type: cdktf.stringToTerraform(struct!.typeIntervalType),
    type_json: cdktf.stringToTerraform(struct!.typeJson),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    type_precision: cdktf.numberToTerraform(struct!.typePrecision),
    type_scale: cdktf.numberToTerraform(struct!.typeScale),
    type_text: cdktf.stringToTerraform(struct!.typeText),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns): any {
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
    mask: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskToHclTerraform(struct!.mask),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partition_index: {
      value: cdktf.numberToHclTerraform(struct!.partitionIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.typeIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_json: {
      value: cdktf.stringToHclTerraform(struct!.typeJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_precision: {
      value: cdktf.numberToHclTerraform(struct!.typePrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_scale: {
      value: cdktf.numberToHclTerraform(struct!.typeScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_text: {
      value: cdktf.stringToHclTerraform(struct!.typeText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._mask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._partitionIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionIndex = this._partitionIndex;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._typeIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIntervalType = this._typeIntervalType;
    }
    if (this._typeJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeJson = this._typeJson;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._typePrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.typePrecision = this._typePrecision;
    }
    if (this._typeScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeScale = this._typeScale;
    }
    if (this._typeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeText = this._typeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._mask.internalValue = undefined;
      this._name = undefined;
      this._nullable = undefined;
      this._partitionIndex = undefined;
      this._position = undefined;
      this._typeIntervalType = undefined;
      this._typeJson = undefined;
      this._typeName = undefined;
      this._typePrecision = undefined;
      this._typeScale = undefined;
      this._typeText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._mask.internalValue = value.mask;
      this._name = value.name;
      this._nullable = value.nullable;
      this._partitionIndex = value.partitionIndex;
      this._position = value.position;
      this._typeIntervalType = value.typeIntervalType;
      this._typeJson = value.typeJson;
      this._typeName = value.typeName;
      this._typePrecision = value.typePrecision;
      this._typeScale = value.typeScale;
      this._typeText = value.typeText;
    }
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

  // mask - computed: true, optional: true, required: false
  private _mask = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference(this, "mask");
  public get mask() {
    return this._mask;
  }
  public putMask(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask) {
    this._mask.internalValue = value;
  }
  public resetMask() {
    this._mask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask.internalValue;
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

  // nullable - computed: true, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // partition_index - computed: true, optional: true, required: false
  private _partitionIndex?: number; 
  public get partitionIndex() {
    return this.getNumberAttribute('partition_index');
  }
  public set partitionIndex(value: number) {
    this._partitionIndex = value;
  }
  public resetPartitionIndex() {
    this._partitionIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIndexInput() {
    return this._partitionIndex;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // type_interval_type - computed: true, optional: true, required: false
  private _typeIntervalType?: string; 
  public get typeIntervalType() {
    return this.getStringAttribute('type_interval_type');
  }
  public set typeIntervalType(value: string) {
    this._typeIntervalType = value;
  }
  public resetTypeIntervalType() {
    this._typeIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIntervalTypeInput() {
    return this._typeIntervalType;
  }

  // type_json - computed: true, optional: true, required: false
  private _typeJson?: string; 
  public get typeJson() {
    return this.getStringAttribute('type_json');
  }
  public set typeJson(value: string) {
    this._typeJson = value;
  }
  public resetTypeJson() {
    this._typeJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeJsonInput() {
    return this._typeJson;
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // type_precision - computed: true, optional: true, required: false
  private _typePrecision?: number; 
  public get typePrecision() {
    return this.getNumberAttribute('type_precision');
  }
  public set typePrecision(value: number) {
    this._typePrecision = value;
  }
  public resetTypePrecision() {
    this._typePrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typePrecisionInput() {
    return this._typePrecision;
  }

  // type_scale - computed: true, optional: true, required: false
  private _typeScale?: number; 
  public get typeScale() {
    return this.getNumberAttribute('type_scale');
  }
  public set typeScale(value: number) {
    this._typeScale = value;
  }
  public resetTypeScale() {
    this._typeScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeScaleInput() {
    return this._typeScale;
  }

  // type_text - computed: true, optional: true, required: false
  private _typeText?: string; 
  public get typeText() {
    return this.getStringAttribute('type_text');
  }
  public set typeText(value: string) {
    this._typeText = value;
  }
  public resetTypeText() {
    this._typeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeTextInput() {
    return this._typeText;
  }
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable {
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}
  */
  readonly localName: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_name: cdktf.stringToTerraform(struct!.localName),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_name: {
      value: cdktf.stringToHclTerraform(struct!.localName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localName = this._localName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localName = value.localName;
    }
  }

  // local_name - computed: false, optional: false, required: true
  private _localName?: string; 
  public get localName() {
    return this.getStringAttribute('local_name');
  }
  public set localName(value: string) {
    this._localName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localNameInput() {
    return this._localName;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#created_at_millis DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#created_at_millis}
  */
  readonly createdAtMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#review_state DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#review_state}
  */
  readonly reviewState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#review_sub_reason DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#review_sub_reason}
  */
  readonly reviewSubReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#reviewer_collaborator_alias DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#reviewer_collaborator_alias}
  */
  readonly reviewerCollaboratorAlias?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    created_at_millis: cdktf.numberToTerraform(struct!.createdAtMillis),
    review_state: cdktf.stringToTerraform(struct!.reviewState),
    review_sub_reason: cdktf.stringToTerraform(struct!.reviewSubReason),
    reviewer_collaborator_alias: cdktf.stringToTerraform(struct!.reviewerCollaboratorAlias),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews): any {
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
    created_at_millis: {
      value: cdktf.numberToHclTerraform(struct!.createdAtMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    review_state: {
      value: cdktf.stringToHclTerraform(struct!.reviewState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    review_sub_reason: {
      value: cdktf.stringToHclTerraform(struct!.reviewSubReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer_collaborator_alias: {
      value: cdktf.stringToHclTerraform(struct!.reviewerCollaboratorAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._createdAtMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAtMillis = this._createdAtMillis;
    }
    if (this._reviewState !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewState = this._reviewState;
    }
    if (this._reviewSubReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewSubReason = this._reviewSubReason;
    }
    if (this._reviewerCollaboratorAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerCollaboratorAlias = this._reviewerCollaboratorAlias;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._createdAtMillis = undefined;
      this._reviewState = undefined;
      this._reviewSubReason = undefined;
      this._reviewerCollaboratorAlias = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._createdAtMillis = value.createdAtMillis;
      this._reviewState = value.reviewState;
      this._reviewSubReason = value.reviewSubReason;
      this._reviewerCollaboratorAlias = value.reviewerCollaboratorAlias;
    }
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

  // created_at_millis - computed: true, optional: true, required: false
  private _createdAtMillis?: number; 
  public get createdAtMillis() {
    return this.getNumberAttribute('created_at_millis');
  }
  public set createdAtMillis(value: number) {
    this._createdAtMillis = value;
  }
  public resetCreatedAtMillis() {
    this._createdAtMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtMillisInput() {
    return this._createdAtMillis;
  }

  // review_state - computed: true, optional: true, required: false
  private _reviewState?: string; 
  public get reviewState() {
    return this.getStringAttribute('review_state');
  }
  public set reviewState(value: string) {
    this._reviewState = value;
  }
  public resetReviewState() {
    this._reviewState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewStateInput() {
    return this._reviewState;
  }

  // review_sub_reason - computed: true, optional: true, required: false
  private _reviewSubReason?: string; 
  public get reviewSubReason() {
    return this.getStringAttribute('review_sub_reason');
  }
  public set reviewSubReason(value: string) {
    this._reviewSubReason = value;
  }
  public resetReviewSubReason() {
    this._reviewSubReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewSubReasonInput() {
    return this._reviewSubReason;
  }

  // reviewer_collaborator_alias - computed: true, optional: true, required: false
  private _reviewerCollaboratorAlias?: string; 
  public get reviewerCollaboratorAlias() {
    return this.getStringAttribute('reviewer_collaborator_alias');
  }
  public set reviewerCollaboratorAlias(value: string) {
    this._reviewerCollaboratorAlias = value;
  }
  public resetReviewerCollaboratorAlias() {
    this._reviewerCollaboratorAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerCollaboratorAliasInput() {
    return this._reviewerCollaboratorAlias;
  }
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#notebook_content DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#notebook_content}
  */
  readonly notebookContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#runner_collaborator_aliases}
  */
  readonly runnerCollaboratorAliases?: string[];
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_content: cdktf.stringToTerraform(struct!.notebookContent),
    runner_collaborator_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runnerCollaboratorAliases),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_content: {
      value: cdktf.stringToHclTerraform(struct!.notebookContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runner_collaborator_aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runnerCollaboratorAliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookContent = this._notebookContent;
    }
    if (this._runnerCollaboratorAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerCollaboratorAliases = this._runnerCollaboratorAliases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notebookContent = undefined;
      this._runnerCollaboratorAliases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notebookContent = value.notebookContent;
      this._runnerCollaboratorAliases = value.runnerCollaboratorAliases;
    }
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // notebook_content - computed: false, optional: false, required: true
  private _notebookContent?: string; 
  public get notebookContent() {
    return this.getStringAttribute('notebook_content');
  }
  public set notebookContent(value: string) {
    this._notebookContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookContentInput() {
    return this._notebookContent;
  }

  // review_state - computed: true, optional: false, required: false
  public get reviewState() {
    return this.getStringAttribute('review_state');
  }

  // reviews - computed: true, optional: false, required: false
  private _reviews = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList(this, "reviews", false);
  public get reviews() {
    return this._reviews;
  }

  // runner_collaborator_aliases - computed: false, optional: true, required: false
  private _runnerCollaboratorAliases?: string[]; 
  public get runnerCollaboratorAliases() {
    return this.getListAttribute('runner_collaborator_aliases');
  }
  public set runnerCollaboratorAliases(value: string[]) {
    this._runnerCollaboratorAliases = value;
  }
  public resetRunnerCollaboratorAliases() {
    this._runnerCollaboratorAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerCollaboratorAliasesInput() {
    return this._runnerCollaboratorAliases;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#using_column_names}
  */
  readonly usingColumnNames?: string[];
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    using_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usingColumnNames),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using_column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usingColumnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._usingColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingColumnNames = this._usingColumnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._usingColumnNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._usingColumnNames = value.usingColumnNames;
    }
  }

  // function_name - computed: true, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // using_column_names - computed: true, optional: true, required: false
  private _usingColumnNames?: string[]; 
  public get usingColumnNames() {
    return this.getListAttribute('using_column_names');
  }
  public set usingColumnNames(value: string[]) {
    this._usingColumnNames = value;
  }
  public resetUsingColumnNames() {
    this._usingColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingColumnNamesInput() {
    return this._usingColumnNames;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#mask}
  */
  readonly mask?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partition_index}
  */
  readonly partitionIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_text}
  */
  readonly typeText?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    mask: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskToTerraform(struct!.mask),
    name: cdktf.stringToTerraform(struct!.name),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    partition_index: cdktf.numberToTerraform(struct!.partitionIndex),
    position: cdktf.numberToTerraform(struct!.position),
    type_interval_type: cdktf.stringToTerraform(struct!.typeIntervalType),
    type_json: cdktf.stringToTerraform(struct!.typeJson),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    type_precision: cdktf.numberToTerraform(struct!.typePrecision),
    type_scale: cdktf.numberToTerraform(struct!.typeScale),
    type_text: cdktf.stringToTerraform(struct!.typeText),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns): any {
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
    mask: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskToHclTerraform(struct!.mask),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partition_index: {
      value: cdktf.numberToHclTerraform(struct!.partitionIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.typeIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_json: {
      value: cdktf.stringToHclTerraform(struct!.typeJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_precision: {
      value: cdktf.numberToHclTerraform(struct!.typePrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_scale: {
      value: cdktf.numberToHclTerraform(struct!.typeScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_text: {
      value: cdktf.stringToHclTerraform(struct!.typeText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._mask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._partitionIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionIndex = this._partitionIndex;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._typeIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIntervalType = this._typeIntervalType;
    }
    if (this._typeJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeJson = this._typeJson;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._typePrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.typePrecision = this._typePrecision;
    }
    if (this._typeScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeScale = this._typeScale;
    }
    if (this._typeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeText = this._typeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._mask.internalValue = undefined;
      this._name = undefined;
      this._nullable = undefined;
      this._partitionIndex = undefined;
      this._position = undefined;
      this._typeIntervalType = undefined;
      this._typeJson = undefined;
      this._typeName = undefined;
      this._typePrecision = undefined;
      this._typeScale = undefined;
      this._typeText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._mask.internalValue = value.mask;
      this._name = value.name;
      this._nullable = value.nullable;
      this._partitionIndex = value.partitionIndex;
      this._position = value.position;
      this._typeIntervalType = value.typeIntervalType;
      this._typeJson = value.typeJson;
      this._typeName = value.typeName;
      this._typePrecision = value.typePrecision;
      this._typeScale = value.typeScale;
      this._typeText = value.typeText;
    }
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

  // mask - computed: true, optional: true, required: false
  private _mask = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference(this, "mask");
  public get mask() {
    return this._mask;
  }
  public putMask(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask) {
    this._mask.internalValue = value;
  }
  public resetMask() {
    this._mask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask.internalValue;
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

  // nullable - computed: true, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // partition_index - computed: true, optional: true, required: false
  private _partitionIndex?: number; 
  public get partitionIndex() {
    return this.getNumberAttribute('partition_index');
  }
  public set partitionIndex(value: number) {
    this._partitionIndex = value;
  }
  public resetPartitionIndex() {
    this._partitionIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIndexInput() {
    return this._partitionIndex;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // type_interval_type - computed: true, optional: true, required: false
  private _typeIntervalType?: string; 
  public get typeIntervalType() {
    return this.getStringAttribute('type_interval_type');
  }
  public set typeIntervalType(value: string) {
    this._typeIntervalType = value;
  }
  public resetTypeIntervalType() {
    this._typeIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIntervalTypeInput() {
    return this._typeIntervalType;
  }

  // type_json - computed: true, optional: true, required: false
  private _typeJson?: string; 
  public get typeJson() {
    return this.getStringAttribute('type_json');
  }
  public set typeJson(value: string) {
    this._typeJson = value;
  }
  public resetTypeJson() {
    this._typeJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeJsonInput() {
    return this._typeJson;
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // type_precision - computed: true, optional: true, required: false
  private _typePrecision?: number; 
  public get typePrecision() {
    return this.getNumberAttribute('type_precision');
  }
  public set typePrecision(value: number) {
    this._typePrecision = value;
  }
  public resetTypePrecision() {
    this._typePrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typePrecisionInput() {
    return this._typePrecision;
  }

  // type_scale - computed: true, optional: true, required: false
  private _typeScale?: number; 
  public get typeScale() {
    return this.getNumberAttribute('type_scale');
  }
  public set typeScale(value: number) {
    this._typeScale = value;
  }
  public resetTypeScale() {
    this._typeScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeScaleInput() {
    return this._typeScale;
  }

  // type_text - computed: true, optional: true, required: false
  private _typeText?: string; 
  public get typeText() {
    return this.getStringAttribute('type_text');
  }
  public set typeText(value: string) {
    this._typeText = value;
  }
  public resetTypeText() {
    this._typeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeTextInput() {
    return this._typeText;
  }
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable {
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#op DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#recipient_property_key DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#recipient_property_key}
  */
  readonly recipientPropertyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#value}
  */
  readonly value?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    op: cdktf.stringToTerraform(struct!.op),
    recipient_property_key: cdktf.stringToTerraform(struct!.recipientPropertyKey),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipient_property_key: {
      value: cdktf.stringToHclTerraform(struct!.recipientPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._recipientPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientPropertyKey = this._recipientPropertyKey;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._op = undefined;
      this._recipientPropertyKey = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._op = value.op;
      this._recipientPropertyKey = value.recipientPropertyKey;
      this._value = value.value;
    }
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

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // recipient_property_key - computed: false, optional: true, required: false
  private _recipientPropertyKey?: string; 
  public get recipientPropertyKey() {
    return this.getStringAttribute('recipient_property_key');
  }
  public set recipientPropertyKey(value: string) {
    this._recipientPropertyKey = value;
  }
  public resetRecipientPropertyKey() {
    this._recipientPropertyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientPropertyKeyInput() {
    return this._recipientPropertyKey;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#value}
  */
  readonly value?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue[] | cdktf.IResolvable;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.listMapper(dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueToTerraform, false)(struct!.value),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}
  */
  readonly localName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partitions DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partitions}
  */
  readonly partitions?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions[] | cdktf.IResolvable;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_name: cdktf.stringToTerraform(struct!.localName),
    partitions: cdktf.listMapper(dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsToTerraform, false)(struct!.partitions),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_name: {
      value: cdktf.stringToHclTerraform(struct!.localName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partitions: {
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsToHclTerraform, false)(struct!.partitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localName = this._localName;
    }
    if (this._partitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localName = undefined;
      this._partitions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localName = value.localName;
      this._partitions.internalValue = value.partitions;
    }
  }

  // local_name - computed: false, optional: false, required: true
  private _localName?: string; 
  public get localName() {
    return this.getStringAttribute('local_name');
  }
  public set localName(value: string) {
    this._localName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localNameInput() {
    return this._localName;
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions[] | cdktf.IResolvable) {
    this._partitions.internalValue = value;
  }
  public resetPartitions() {
    this._partitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions.internalValue;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#using_column_names}
  */
  readonly usingColumnNames?: string[];
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    using_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usingColumnNames),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using_column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usingColumnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._usingColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingColumnNames = this._usingColumnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._usingColumnNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._usingColumnNames = value.usingColumnNames;
    }
  }

  // function_name - computed: true, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // using_column_names - computed: true, optional: true, required: false
  private _usingColumnNames?: string[]; 
  public get usingColumnNames() {
    return this.getListAttribute('using_column_names');
  }
  public set usingColumnNames(value: string[]) {
    this._usingColumnNames = value;
  }
  public resetUsingColumnNames() {
    this._usingColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingColumnNamesInput() {
    return this._usingColumnNames;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#mask}
  */
  readonly mask?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partition_index}
  */
  readonly partitionIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_text}
  */
  readonly typeText?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    mask: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskToTerraform(struct!.mask),
    name: cdktf.stringToTerraform(struct!.name),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    partition_index: cdktf.numberToTerraform(struct!.partitionIndex),
    position: cdktf.numberToTerraform(struct!.position),
    type_interval_type: cdktf.stringToTerraform(struct!.typeIntervalType),
    type_json: cdktf.stringToTerraform(struct!.typeJson),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    type_precision: cdktf.numberToTerraform(struct!.typePrecision),
    type_scale: cdktf.numberToTerraform(struct!.typeScale),
    type_text: cdktf.stringToTerraform(struct!.typeText),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns): any {
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
    mask: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskToHclTerraform(struct!.mask),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partition_index: {
      value: cdktf.numberToHclTerraform(struct!.partitionIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.typeIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_json: {
      value: cdktf.stringToHclTerraform(struct!.typeJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_precision: {
      value: cdktf.numberToHclTerraform(struct!.typePrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_scale: {
      value: cdktf.numberToHclTerraform(struct!.typeScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_text: {
      value: cdktf.stringToHclTerraform(struct!.typeText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._mask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._partitionIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionIndex = this._partitionIndex;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._typeIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIntervalType = this._typeIntervalType;
    }
    if (this._typeJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeJson = this._typeJson;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._typePrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.typePrecision = this._typePrecision;
    }
    if (this._typeScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeScale = this._typeScale;
    }
    if (this._typeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeText = this._typeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._mask.internalValue = undefined;
      this._name = undefined;
      this._nullable = undefined;
      this._partitionIndex = undefined;
      this._position = undefined;
      this._typeIntervalType = undefined;
      this._typeJson = undefined;
      this._typeName = undefined;
      this._typePrecision = undefined;
      this._typeScale = undefined;
      this._typeText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._mask.internalValue = value.mask;
      this._name = value.name;
      this._nullable = value.nullable;
      this._partitionIndex = value.partitionIndex;
      this._position = value.position;
      this._typeIntervalType = value.typeIntervalType;
      this._typeJson = value.typeJson;
      this._typeName = value.typeName;
      this._typePrecision = value.typePrecision;
      this._typeScale = value.typeScale;
      this._typeText = value.typeText;
    }
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

  // mask - computed: true, optional: true, required: false
  private _mask = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference(this, "mask");
  public get mask() {
    return this._mask;
  }
  public putMask(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask) {
    this._mask.internalValue = value;
  }
  public resetMask() {
    this._mask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask.internalValue;
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

  // nullable - computed: true, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // partition_index - computed: true, optional: true, required: false
  private _partitionIndex?: number; 
  public get partitionIndex() {
    return this.getNumberAttribute('partition_index');
  }
  public set partitionIndex(value: number) {
    this._partitionIndex = value;
  }
  public resetPartitionIndex() {
    this._partitionIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIndexInput() {
    return this._partitionIndex;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // type_interval_type - computed: true, optional: true, required: false
  private _typeIntervalType?: string; 
  public get typeIntervalType() {
    return this.getStringAttribute('type_interval_type');
  }
  public set typeIntervalType(value: string) {
    this._typeIntervalType = value;
  }
  public resetTypeIntervalType() {
    this._typeIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIntervalTypeInput() {
    return this._typeIntervalType;
  }

  // type_json - computed: true, optional: true, required: false
  private _typeJson?: string; 
  public get typeJson() {
    return this.getStringAttribute('type_json');
  }
  public set typeJson(value: string) {
    this._typeJson = value;
  }
  public resetTypeJson() {
    this._typeJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeJsonInput() {
    return this._typeJson;
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // type_precision - computed: true, optional: true, required: false
  private _typePrecision?: number; 
  public get typePrecision() {
    return this.getNumberAttribute('type_precision');
  }
  public set typePrecision(value: number) {
    this._typePrecision = value;
  }
  public resetTypePrecision() {
    this._typePrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typePrecisionInput() {
    return this._typePrecision;
  }

  // type_scale - computed: true, optional: true, required: false
  private _typeScale?: number; 
  public get typeScale() {
    return this.getNumberAttribute('type_scale');
  }
  public set typeScale(value: number) {
    this._typeScale = value;
  }
  public resetTypeScale() {
    this._typeScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeScaleInput() {
    return this._typeScale;
  }

  // type_text - computed: true, optional: true, required: false
  private _typeText?: string; 
  public get typeText() {
    return this.getStringAttribute('type_text');
  }
  public set typeText(value: string) {
    this._typeText = value;
  }
  public resetTypeText() {
    this._typeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeTextInput() {
    return this._typeText;
  }
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView {
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}
  */
  readonly localName: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_name: cdktf.stringToTerraform(struct!.localName),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_name: {
      value: cdktf.stringToHclTerraform(struct!.localName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localName = this._localName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localName = value.localName;
    }
  }

  // local_name - computed: false, optional: false, required: true
  private _localName?: string; 
  public get localName() {
    return this.getStringAttribute('local_name');
  }
  public set localName(value: string) {
    this._localName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localNameInput() {
    return this._localName;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}
  */
  readonly localName: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_name: cdktf.stringToTerraform(struct!.localName),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_name: {
      value: cdktf.stringToHclTerraform(struct!.localName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localName = this._localName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localName = value.localName;
    }
  }

  // local_name - computed: false, optional: false, required: true
  private _localName?: string; 
  public get localName() {
    return this.getStringAttribute('local_name');
  }
  public set localName(value: string) {
    this._localName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localNameInput() {
    return this._localName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset databricks_clean_room_asset_revisions_clean_room_asset}
*/
export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_clean_room_asset_revisions_clean_room_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset to import
  * @param importFromId The id of the existing DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_clean_room_asset_revisions_clean_room_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset databricks_clean_room_asset_revisions_clean_room_asset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_clean_room_asset_revisions_clean_room_asset',
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
    this._assetType = config.assetType;
    this._cleanRoomName = config.cleanRoomName;
    this._foreignTable.internalValue = config.foreignTable;
    this._foreignTableLocalDetails.internalValue = config.foreignTableLocalDetails;
    this._name = config.name;
    this._notebook.internalValue = config.notebook;
    this._table.internalValue = config.table;
    this._tableLocalDetails.internalValue = config.tableLocalDetails;
    this._view.internalValue = config.view;
    this._viewLocalDetails.internalValue = config.viewLocalDetails;
    this._volumeLocalDetails.internalValue = config.volumeLocalDetails;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // added_at - computed: true, optional: false, required: false
  public get addedAt() {
    return this.getNumberAttribute('added_at');
  }

  // asset_type - computed: false, optional: false, required: true
  private _assetType?: string; 
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }
  public set assetType(value: string) {
    this._assetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypeInput() {
    return this._assetType;
  }

  // clean_room_name - computed: false, optional: true, required: false
  private _cleanRoomName?: string; 
  public get cleanRoomName() {
    return this.getStringAttribute('clean_room_name');
  }
  public set cleanRoomName(value: string) {
    this._cleanRoomName = value;
  }
  public resetCleanRoomName() {
    this._cleanRoomName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanRoomNameInput() {
    return this._cleanRoomName;
  }

  // foreign_table - computed: false, optional: true, required: false
  private _foreignTable = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference(this, "foreign_table");
  public get foreignTable() {
    return this._foreignTable;
  }
  public putForeignTable(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable) {
    this._foreignTable.internalValue = value;
  }
  public resetForeignTable() {
    this._foreignTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignTableInput() {
    return this._foreignTable.internalValue;
  }

  // foreign_table_local_details - computed: false, optional: true, required: false
  private _foreignTableLocalDetails = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference(this, "foreign_table_local_details");
  public get foreignTableLocalDetails() {
    return this._foreignTableLocalDetails;
  }
  public putForeignTableLocalDetails(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails) {
    this._foreignTableLocalDetails.internalValue = value;
  }
  public resetForeignTableLocalDetails() {
    this._foreignTableLocalDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignTableLocalDetailsInput() {
    return this._foreignTableLocalDetails.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notebook - computed: false, optional: true, required: false
  private _notebook = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference(this, "notebook");
  public get notebook() {
    return this._notebook;
  }
  public putNotebook(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook) {
    this._notebook.internalValue = value;
  }
  public resetNotebook() {
    this._notebook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInput() {
    return this._notebook.internalValue;
  }

  // owner_collaborator_alias - computed: true, optional: false, required: false
  public get ownerCollaboratorAlias() {
    return this.getStringAttribute('owner_collaborator_alias');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // table - computed: false, optional: true, required: false
  private _table = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }

  // table_local_details - computed: false, optional: true, required: false
  private _tableLocalDetails = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference(this, "table_local_details");
  public get tableLocalDetails() {
    return this._tableLocalDetails;
  }
  public putTableLocalDetails(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails) {
    this._tableLocalDetails.internalValue = value;
  }
  public resetTableLocalDetails() {
    this._tableLocalDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableLocalDetailsInput() {
    return this._tableLocalDetails.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }

  // view_local_details - computed: false, optional: true, required: false
  private _viewLocalDetails = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference(this, "view_local_details");
  public get viewLocalDetails() {
    return this._viewLocalDetails;
  }
  public putViewLocalDetails(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails) {
    this._viewLocalDetails.internalValue = value;
  }
  public resetViewLocalDetails() {
    this._viewLocalDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewLocalDetailsInput() {
    return this._viewLocalDetails.internalValue;
  }

  // volume_local_details - computed: false, optional: true, required: false
  private _volumeLocalDetails = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference(this, "volume_local_details");
  public get volumeLocalDetails() {
    return this._volumeLocalDetails;
  }
  public putVolumeLocalDetails(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails) {
    this._volumeLocalDetails.internalValue = value;
  }
  public resetVolumeLocalDetails() {
    this._volumeLocalDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLocalDetailsInput() {
    return this._volumeLocalDetails.internalValue;
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
      asset_type: cdktf.stringToTerraform(this._assetType),
      clean_room_name: cdktf.stringToTerraform(this._cleanRoomName),
      foreign_table: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableToTerraform(this._foreignTable.internalValue),
      foreign_table_local_details: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsToTerraform(this._foreignTableLocalDetails.internalValue),
      name: cdktf.stringToTerraform(this._name),
      notebook: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookToTerraform(this._notebook.internalValue),
      table: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableToTerraform(this._table.internalValue),
      table_local_details: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsToTerraform(this._tableLocalDetails.internalValue),
      view: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewToTerraform(this._view.internalValue),
      view_local_details: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsToTerraform(this._viewLocalDetails.internalValue),
      volume_local_details: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsToTerraform(this._volumeLocalDetails.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_type: {
        value: cdktf.stringToHclTerraform(this._assetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clean_room_name: {
        value: cdktf.stringToHclTerraform(this._cleanRoomName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      foreign_table: {
        value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableToHclTerraform(this._foreignTable.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable",
      },
      foreign_table_local_details: {
        value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsToHclTerraform(this._foreignTableLocalDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notebook: {
        value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookToHclTerraform(this._notebook.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook",
      },
      table: {
        value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableToHclTerraform(this._table.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable",
      },
      table_local_details: {
        value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsToHclTerraform(this._tableLocalDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails",
      },
      view: {
        value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewToHclTerraform(this._view.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView",
      },
      view_local_details: {
        value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsToHclTerraform(this._viewLocalDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails",
      },
      volume_local_details: {
        value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsToHclTerraform(this._volumeLocalDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails",
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
