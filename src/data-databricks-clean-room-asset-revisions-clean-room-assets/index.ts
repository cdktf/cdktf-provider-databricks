/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#workspace_id DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#using_column_names}
  */
  readonly usingColumnNames?: string[];
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    using_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usingColumnNames),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask | cdktf.IResolvable | undefined) {
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
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#mask}
  */
  readonly mask?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partition_index}
  */
  readonly partitionIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_text}
  */
  readonly typeText?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    mask: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskToTerraform(struct!.mask),
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


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns): any {
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
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskToHclTerraform(struct!.mask),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask",
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns | undefined) {
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
  private _mask = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference(this, "mask");
  public get mask() {
    return this._mask;
  }
  public putMask(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask) {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable {
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable | cdktf.IResolvable | undefined) {
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
  private _columns = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}
  */
  readonly localName: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_name: cdktf.stringToTerraform(struct!.localName),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails | cdktf.IResolvable | undefined) {
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

  // local_name - computed: true, optional: false, required: true
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
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#created_at_millis DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#created_at_millis}
  */
  readonly createdAtMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#review_state DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#review_state}
  */
  readonly reviewState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#review_sub_reason DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#review_sub_reason}
  */
  readonly reviewSubReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#reviewer_collaborator_alias DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#reviewer_collaborator_alias}
  */
  readonly reviewerCollaboratorAlias?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews): any {
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


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews): any {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews | undefined) {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#notebook_content DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#notebook_content}
  */
  readonly notebookContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#runner_collaborator_aliases DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#runner_collaborator_aliases}
  */
  readonly runnerCollaboratorAliases?: string[];
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_content: cdktf.stringToTerraform(struct!.notebookContent),
    runner_collaborator_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runnerCollaboratorAliases),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook | cdktf.IResolvable | undefined) {
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

  // notebook_content - computed: true, optional: false, required: true
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
  private _reviews = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList(this, "reviews", false);
  public get reviews() {
    return this._reviews;
  }

  // runner_collaborator_aliases - computed: true, optional: true, required: false
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
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#using_column_names}
  */
  readonly usingColumnNames?: string[];
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    using_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usingColumnNames),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask | cdktf.IResolvable | undefined) {
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
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#mask}
  */
  readonly mask?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partition_index}
  */
  readonly partitionIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_text}
  */
  readonly typeText?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    mask: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskToTerraform(struct!.mask),
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


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns): any {
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
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskToHclTerraform(struct!.mask),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask",
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns | undefined) {
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
  private _mask = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference(this, "mask");
  public get mask() {
    return this._mask;
  }
  public putMask(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask) {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable {
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable | cdktf.IResolvable | undefined) {
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
  private _columns = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#op DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#recipient_property_key DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#recipient_property_key}
  */
  readonly recipientPropertyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#value}
  */
  readonly value?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue | cdktf.IResolvable): any {
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


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue | cdktf.IResolvable | undefined) {
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

  // op - computed: true, optional: true, required: false
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

  // recipient_property_key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#value}
  */
  readonly value?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue[] | cdktf.IResolvable;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.listMapper(dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueToTerraform, false)(struct!.value),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions | cdktf.IResolvable | undefined) {
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

  // value - computed: true, optional: true, required: false
  private _value = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue[] | cdktf.IResolvable) {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}
  */
  readonly localName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partitions DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partitions}
  */
  readonly partitions?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions[] | cdktf.IResolvable;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_name: cdktf.stringToTerraform(struct!.localName),
    partitions: cdktf.listMapper(dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsToTerraform, false)(struct!.partitions),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsToHclTerraform, false)(struct!.partitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails | cdktf.IResolvable | undefined) {
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

  // local_name - computed: true, optional: false, required: true
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

  // partitions - computed: true, optional: true, required: false
  private _partitions = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions[] | cdktf.IResolvable) {
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
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#using_column_names}
  */
  readonly usingColumnNames?: string[];
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    using_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usingColumnNames),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask | cdktf.IResolvable | undefined) {
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
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#mask}
  */
  readonly mask?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partition_index}
  */
  readonly partitionIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_text}
  */
  readonly typeText?: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    mask: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskToTerraform(struct!.mask),
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


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns): any {
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
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskToHclTerraform(struct!.mask),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask",
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns | undefined) {
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
  private _mask = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference(this, "mask");
  public get mask() {
    return this._mask;
  }
  public putMask(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask) {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView {
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView | cdktf.IResolvable | undefined) {
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
  private _columns = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
}
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}
  */
  readonly localName: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_name: cdktf.stringToTerraform(struct!.localName),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails | cdktf.IResolvable | undefined) {
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

  // local_name - computed: true, optional: false, required: true
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
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}
  */
  readonly localName: string;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_name: cdktf.stringToTerraform(struct!.localName),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails | cdktf.IResolvable): any {
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

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails | cdktf.IResolvable | undefined) {
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

  // local_name - computed: true, optional: false, required: true
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
export interface DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#asset_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#asset_type}
  */
  readonly assetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#clean_room_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#clean_room_name}
  */
  readonly cleanRoomName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#foreign_table DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#foreign_table}
  */
  readonly foreignTable?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#foreign_table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#foreign_table_local_details}
  */
  readonly foreignTableLocalDetails?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#notebook DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#notebook}
  */
  readonly notebook?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#table DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#table}
  */
  readonly table?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#table_local_details}
  */
  readonly tableLocalDetails?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#view DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#view}
  */
  readonly view?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#view_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#view_local_details}
  */
  readonly viewLocalDetails?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#volume_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#volume_local_details}
  */
  readonly volumeLocalDetails?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails;
}

export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsToTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_type: cdktf.stringToTerraform(struct!.assetType),
    clean_room_name: cdktf.stringToTerraform(struct!.cleanRoomName),
    foreign_table: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableToTerraform(struct!.foreignTable),
    foreign_table_local_details: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsToTerraform(struct!.foreignTableLocalDetails),
    name: cdktf.stringToTerraform(struct!.name),
    notebook: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookToTerraform(struct!.notebook),
    table: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableToTerraform(struct!.table),
    table_local_details: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsToTerraform(struct!.tableLocalDetails),
    view: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewToTerraform(struct!.view),
    view_local_details: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsToTerraform(struct!.viewLocalDetails),
    volume_local_details: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsToTerraform(struct!.volumeLocalDetails),
  }
}


export function dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsToHclTerraform(struct?: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_type: {
      value: cdktf.stringToHclTerraform(struct!.assetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clean_room_name: {
      value: cdktf.stringToHclTerraform(struct!.cleanRoomName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreign_table: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableToHclTerraform(struct!.foreignTable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable",
    },
    foreign_table_local_details: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsToHclTerraform(struct!.foreignTableLocalDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notebook: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookToHclTerraform(struct!.notebook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook",
    },
    table: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable",
    },
    table_local_details: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsToHclTerraform(struct!.tableLocalDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails",
    },
    view: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewToHclTerraform(struct!.view),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView",
    },
    view_local_details: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsToHclTerraform(struct!.viewLocalDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails",
    },
    volume_local_details: {
      value: dataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsToHclTerraform(struct!.volumeLocalDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetType = this._assetType;
    }
    if (this._cleanRoomName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanRoomName = this._cleanRoomName;
    }
    if (this._foreignTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignTable = this._foreignTable?.internalValue;
    }
    if (this._foreignTableLocalDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignTableLocalDetails = this._foreignTableLocalDetails?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notebook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebook = this._notebook?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    if (this._tableLocalDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableLocalDetails = this._tableLocalDetails?.internalValue;
    }
    if (this._view?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view?.internalValue;
    }
    if (this._viewLocalDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewLocalDetails = this._viewLocalDetails?.internalValue;
    }
    if (this._volumeLocalDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLocalDetails = this._volumeLocalDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assetType = undefined;
      this._cleanRoomName = undefined;
      this._foreignTable.internalValue = undefined;
      this._foreignTableLocalDetails.internalValue = undefined;
      this._name = undefined;
      this._notebook.internalValue = undefined;
      this._table.internalValue = undefined;
      this._tableLocalDetails.internalValue = undefined;
      this._view.internalValue = undefined;
      this._viewLocalDetails.internalValue = undefined;
      this._volumeLocalDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assetType = value.assetType;
      this._cleanRoomName = value.cleanRoomName;
      this._foreignTable.internalValue = value.foreignTable;
      this._foreignTableLocalDetails.internalValue = value.foreignTableLocalDetails;
      this._name = value.name;
      this._notebook.internalValue = value.notebook;
      this._table.internalValue = value.table;
      this._tableLocalDetails.internalValue = value.tableLocalDetails;
      this._view.internalValue = value.view;
      this._viewLocalDetails.internalValue = value.viewLocalDetails;
      this._volumeLocalDetails.internalValue = value.volumeLocalDetails;
    }
  }

  // added_at - computed: true, optional: false, required: false
  public get addedAt() {
    return this.getNumberAttribute('added_at');
  }

  // asset_type - computed: true, optional: false, required: true
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

  // clean_room_name - computed: true, optional: true, required: false
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

  // foreign_table - computed: true, optional: true, required: false
  private _foreignTable = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference(this, "foreign_table");
  public get foreignTable() {
    return this._foreignTable;
  }
  public putForeignTable(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable) {
    this._foreignTable.internalValue = value;
  }
  public resetForeignTable() {
    this._foreignTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignTableInput() {
    return this._foreignTable.internalValue;
  }

  // foreign_table_local_details - computed: true, optional: true, required: false
  private _foreignTableLocalDetails = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference(this, "foreign_table_local_details");
  public get foreignTableLocalDetails() {
    return this._foreignTableLocalDetails;
  }
  public putForeignTableLocalDetails(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails) {
    this._foreignTableLocalDetails.internalValue = value;
  }
  public resetForeignTableLocalDetails() {
    this._foreignTableLocalDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignTableLocalDetailsInput() {
    return this._foreignTableLocalDetails.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // notebook - computed: true, optional: true, required: false
  private _notebook = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference(this, "notebook");
  public get notebook() {
    return this._notebook;
  }
  public putNotebook(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook) {
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

  // table - computed: true, optional: true, required: false
  private _table = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }

  // table_local_details - computed: true, optional: true, required: false
  private _tableLocalDetails = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference(this, "table_local_details");
  public get tableLocalDetails() {
    return this._tableLocalDetails;
  }
  public putTableLocalDetails(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails) {
    this._tableLocalDetails.internalValue = value;
  }
  public resetTableLocalDetails() {
    this._tableLocalDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableLocalDetailsInput() {
    return this._tableLocalDetails.internalValue;
  }

  // view - computed: true, optional: true, required: false
  private _view = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }

  // view_local_details - computed: true, optional: true, required: false
  private _viewLocalDetails = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference(this, "view_local_details");
  public get viewLocalDetails() {
    return this._viewLocalDetails;
  }
  public putViewLocalDetails(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails) {
    this._viewLocalDetails.internalValue = value;
  }
  public resetViewLocalDetails() {
    this._viewLocalDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewLocalDetailsInput() {
    return this._viewLocalDetails.internalValue;
  }

  // volume_local_details - computed: true, optional: true, required: false
  private _volumeLocalDetails = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference(this, "volume_local_details");
  public get volumeLocalDetails() {
    return this._volumeLocalDetails;
  }
  public putVolumeLocalDetails(value: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails) {
    this._volumeLocalDetails.internalValue = value;
  }
  public resetVolumeLocalDetails() {
    this._volumeLocalDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLocalDetailsInput() {
    return this._volumeLocalDetails.internalValue;
  }
}

export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference {
    return new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets databricks_clean_room_asset_revisions_clean_room_assets}
*/
export class DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_clean_room_asset_revisions_clean_room_assets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets to import
  * @param importFromId The id of the existing DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_clean_room_asset_revisions_clean_room_assets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets databricks_clean_room_asset_revisions_clean_room_assets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_clean_room_asset_revisions_clean_room_assets',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.90.0',
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
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // revisions - computed: true, optional: false, required: false
  private _revisions = new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList(this, "revisions", false);
  public get revisions() {
    return this._revisions;
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
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
