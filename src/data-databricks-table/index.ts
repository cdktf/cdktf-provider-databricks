// https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#id DataDatabricksTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#name DataDatabricksTable#name}
  */
  readonly name: string;
  /**
  * table_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#table_info DataDatabricksTable#table_info}
  */
  readonly tableInfo?: DataDatabricksTableTableInfo;
}
export interface DataDatabricksTableTableInfoColumnsMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#using_column_names DataDatabricksTable#using_column_names}
  */
  readonly usingColumnNames?: string[];
}

export function dataDatabricksTableTableInfoColumnsMaskToTerraform(struct?: DataDatabricksTableTableInfoColumnsMaskOutputReference | DataDatabricksTableTableInfoColumnsMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    using_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usingColumnNames),
  }
}


export function dataDatabricksTableTableInfoColumnsMaskToHclTerraform(struct?: DataDatabricksTableTableInfoColumnsMaskOutputReference | DataDatabricksTableTableInfoColumnsMask): any {
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

export class DataDatabricksTableTableInfoColumnsMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoColumnsMask | undefined {
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

  public set internalValue(value: DataDatabricksTableTableInfoColumnsMask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionName = undefined;
      this._usingColumnNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionName = value.functionName;
      this._usingColumnNames = value.usingColumnNames;
    }
  }

  // function_name - computed: false, optional: true, required: false
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

  // using_column_names - computed: false, optional: true, required: false
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
export interface DataDatabricksTableTableInfoColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#comment DataDatabricksTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#name DataDatabricksTable#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#nullable DataDatabricksTable#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#partition_index DataDatabricksTable#partition_index}
  */
  readonly partitionIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#position DataDatabricksTable#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#type_interval_type DataDatabricksTable#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#type_json DataDatabricksTable#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#type_name DataDatabricksTable#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#type_precision DataDatabricksTable#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#type_scale DataDatabricksTable#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#type_text DataDatabricksTable#type_text}
  */
  readonly typeText?: string;
  /**
  * mask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#mask DataDatabricksTable#mask}
  */
  readonly mask?: DataDatabricksTableTableInfoColumnsMask;
}

export function dataDatabricksTableTableInfoColumnsToTerraform(struct?: DataDatabricksTableTableInfoColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
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
    mask: dataDatabricksTableTableInfoColumnsMaskToTerraform(struct!.mask),
  }
}


export function dataDatabricksTableTableInfoColumnsToHclTerraform(struct?: DataDatabricksTableTableInfoColumns | cdktf.IResolvable): any {
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
    mask: {
      value: dataDatabricksTableTableInfoColumnsMaskToHclTerraform(struct!.mask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoColumnsMaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksTableTableInfoColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._mask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
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
      this._mask.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
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
      this._mask.internalValue = value.mask;
    }
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

  // nullable - computed: false, optional: true, required: false
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

  // partition_index - computed: false, optional: true, required: false
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

  // position - computed: false, optional: true, required: false
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

  // type_interval_type - computed: false, optional: true, required: false
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

  // type_json - computed: false, optional: true, required: false
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

  // type_name - computed: false, optional: true, required: false
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

  // type_precision - computed: false, optional: true, required: false
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

  // type_scale - computed: false, optional: true, required: false
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

  // type_text - computed: false, optional: true, required: false
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

  // mask - computed: false, optional: true, required: false
  private _mask = new DataDatabricksTableTableInfoColumnsMaskOutputReference(this, "mask");
  public get mask() {
    return this._mask;
  }
  public putMask(value: DataDatabricksTableTableInfoColumnsMask) {
    this._mask.internalValue = value;
  }
  public resetMask() {
    this._mask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask.internalValue;
  }
}

export class DataDatabricksTableTableInfoColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksTableTableInfoColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksTableTableInfoColumnsOutputReference {
    return new DataDatabricksTableTableInfoColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#delta_runtime_properties DataDatabricksTable#delta_runtime_properties}
  */
  readonly deltaRuntimeProperties: { [key: string]: string };
}

export function dataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsToTerraform(struct?: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference | DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delta_runtime_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.deltaRuntimeProperties),
  }
}


export function dataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsToHclTerraform(struct?: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference | DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delta_runtime_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.deltaRuntimeProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaRuntimeProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaRuntimeProperties = this._deltaRuntimeProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deltaRuntimeProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deltaRuntimeProperties = value.deltaRuntimeProperties;
    }
  }

  // delta_runtime_properties - computed: false, optional: false, required: true
  private _deltaRuntimeProperties?: { [key: string]: string }; 
  public get deltaRuntimeProperties() {
    return this.getStringMapAttribute('delta_runtime_properties');
  }
  public set deltaRuntimeProperties(value: { [key: string]: string }) {
    this._deltaRuntimeProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaRuntimePropertiesInput() {
    return this._deltaRuntimeProperties;
  }
}
export interface DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#inherited_from_name DataDatabricksTable#inherited_from_name}
  */
  readonly inheritedFromName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#inherited_from_type DataDatabricksTable#inherited_from_type}
  */
  readonly inheritedFromType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#value DataDatabricksTable#value}
  */
  readonly value: string;
}

export function dataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagToTerraform(struct?: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference | DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherited_from_name: cdktf.stringToTerraform(struct!.inheritedFromName),
    inherited_from_type: cdktf.stringToTerraform(struct!.inheritedFromType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagToHclTerraform(struct?: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference | DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inherited_from_name: {
      value: cdktf.stringToHclTerraform(struct!.inheritedFromName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inherited_from_type: {
      value: cdktf.stringToHclTerraform(struct!.inheritedFromType),
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

export class DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inheritedFromName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedFromName = this._inheritedFromName;
    }
    if (this._inheritedFromType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedFromType = this._inheritedFromType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inheritedFromName = undefined;
      this._inheritedFromType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inheritedFromName = value.inheritedFromName;
      this._inheritedFromType = value.inheritedFromType;
      this._value = value.value;
    }
  }

  // inherited_from_name - computed: false, optional: true, required: false
  private _inheritedFromName?: string; 
  public get inheritedFromName() {
    return this.getStringAttribute('inherited_from_name');
  }
  public set inheritedFromName(value: string) {
    this._inheritedFromName = value;
  }
  public resetInheritedFromName() {
    this._inheritedFromName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedFromNameInput() {
    return this._inheritedFromName;
  }

  // inherited_from_type - computed: false, optional: true, required: false
  private _inheritedFromType?: string; 
  public get inheritedFromType() {
    return this.getStringAttribute('inherited_from_type');
  }
  public set inheritedFromType(value: string) {
    this._inheritedFromType = value;
  }
  public resetInheritedFromType() {
    this._inheritedFromType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedFromTypeInput() {
    return this._inheritedFromType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#algorithm DataDatabricksTable#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#aws_kms_key_arn DataDatabricksTable#aws_kms_key_arn}
  */
  readonly awsKmsKeyArn?: string;
}

export function dataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsToTerraform(struct?: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference | DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    aws_kms_key_arn: cdktf.stringToTerraform(struct!.awsKmsKeyArn),
  }
}


export function dataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsToHclTerraform(struct?: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference | DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsKmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._awsKmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKmsKeyArn = this._awsKmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._awsKmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._awsKmsKeyArn = value.awsKmsKeyArn;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // aws_kms_key_arn - computed: false, optional: true, required: false
  private _awsKmsKeyArn?: string; 
  public get awsKmsKeyArn() {
    return this.getStringAttribute('aws_kms_key_arn');
  }
  public set awsKmsKeyArn(value: string) {
    this._awsKmsKeyArn = value;
  }
  public resetAwsKmsKeyArn() {
    this._awsKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyArnInput() {
    return this._awsKmsKeyArn;
  }
}
export interface DataDatabricksTableTableInfoEncryptionDetails {
  /**
  * sse_encryption_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#sse_encryption_details DataDatabricksTable#sse_encryption_details}
  */
  readonly sseEncryptionDetails?: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails;
}

export function dataDatabricksTableTableInfoEncryptionDetailsToTerraform(struct?: DataDatabricksTableTableInfoEncryptionDetailsOutputReference | DataDatabricksTableTableInfoEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sse_encryption_details: dataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsToTerraform(struct!.sseEncryptionDetails),
  }
}


export function dataDatabricksTableTableInfoEncryptionDetailsToHclTerraform(struct?: DataDatabricksTableTableInfoEncryptionDetailsOutputReference | DataDatabricksTableTableInfoEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sse_encryption_details: {
      value: dataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsToHclTerraform(struct!.sseEncryptionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoEncryptionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoEncryptionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseEncryptionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseEncryptionDetails = this._sseEncryptionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoEncryptionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseEncryptionDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseEncryptionDetails.internalValue = value.sseEncryptionDetails;
    }
  }

  // sse_encryption_details - computed: false, optional: true, required: false
  private _sseEncryptionDetails = new DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference(this, "sse_encryption_details");
  public get sseEncryptionDetails() {
    return this._sseEncryptionDetails;
  }
  public putSseEncryptionDetails(value: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails) {
    this._sseEncryptionDetails.internalValue = value;
  }
  public resetSseEncryptionDetails() {
    this._sseEncryptionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseEncryptionDetailsInput() {
    return this._sseEncryptionDetails.internalValue;
  }
}
export interface DataDatabricksTableTableInfoRowFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#input_column_names DataDatabricksTable#input_column_names}
  */
  readonly inputColumnNames: string[];
}

export function dataDatabricksTableTableInfoRowFilterToTerraform(struct?: DataDatabricksTableTableInfoRowFilterOutputReference | DataDatabricksTableTableInfoRowFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    input_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputColumnNames),
  }
}


export function dataDatabricksTableTableInfoRowFilterToHclTerraform(struct?: DataDatabricksTableTableInfoRowFilterOutputReference | DataDatabricksTableTableInfoRowFilter): any {
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
    input_column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputColumnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoRowFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoRowFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._inputColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputColumnNames = this._inputColumnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoRowFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionName = undefined;
      this._inputColumnNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionName = value.functionName;
      this._inputColumnNames = value.inputColumnNames;
    }
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // input_column_names - computed: false, optional: false, required: true
  private _inputColumnNames?: string[]; 
  public get inputColumnNames() {
    return this.getListAttribute('input_column_names');
  }
  public set inputColumnNames(value: string[]) {
    this._inputColumnNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputColumnNamesInput() {
    return this._inputColumnNames;
  }
}
export interface DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}
  */
  readonly childColumns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#name DataDatabricksTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#parent_columns DataDatabricksTable#parent_columns}
  */
  readonly parentColumns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#parent_table DataDatabricksTable#parent_table}
  */
  readonly parentTable: string;
}

export function dataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintToTerraform(struct?: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference | DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.childColumns),
    name: cdktf.stringToTerraform(struct!.name),
    parent_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parentColumns),
    parent_table: cdktf.stringToTerraform(struct!.parentTable),
  }
}


export function dataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintToHclTerraform(struct?: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference | DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.childColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parentColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parent_table: {
      value: cdktf.stringToHclTerraform(struct!.parentTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.childColumns = this._childColumns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentColumns = this._parentColumns;
    }
    if (this._parentTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentTable = this._parentTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childColumns = undefined;
      this._name = undefined;
      this._parentColumns = undefined;
      this._parentTable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childColumns = value.childColumns;
      this._name = value.name;
      this._parentColumns = value.parentColumns;
      this._parentTable = value.parentTable;
    }
  }

  // child_columns - computed: false, optional: false, required: true
  private _childColumns?: string[]; 
  public get childColumns() {
    return this.getListAttribute('child_columns');
  }
  public set childColumns(value: string[]) {
    this._childColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childColumnsInput() {
    return this._childColumns;
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

  // parent_columns - computed: false, optional: false, required: true
  private _parentColumns?: string[]; 
  public get parentColumns() {
    return this.getListAttribute('parent_columns');
  }
  public set parentColumns(value: string[]) {
    this._parentColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentColumnsInput() {
    return this._parentColumns;
  }

  // parent_table - computed: false, optional: false, required: true
  private _parentTable?: string; 
  public get parentTable() {
    return this.getStringAttribute('parent_table');
  }
  public set parentTable(value: string) {
    this._parentTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTableInput() {
    return this._parentTable;
  }
}
export interface DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#name DataDatabricksTable#name}
  */
  readonly name: string;
}

export function dataDatabricksTableTableInfoTableConstraintsNamedTableConstraintToTerraform(struct?: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference | DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksTableTableInfoTableConstraintsNamedTableConstraintToHclTerraform(struct?: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference | DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}
  */
  readonly childColumns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#name DataDatabricksTable#name}
  */
  readonly name: string;
}

export function dataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintToTerraform(struct?: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference | DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.childColumns),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintToHclTerraform(struct?: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference | DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.childColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.childColumns = this._childColumns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childColumns = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childColumns = value.childColumns;
      this._name = value.name;
    }
  }

  // child_columns - computed: false, optional: false, required: true
  private _childColumns?: string[]; 
  public get childColumns() {
    return this.getListAttribute('child_columns');
  }
  public set childColumns(value: string[]) {
    this._childColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childColumnsInput() {
    return this._childColumns;
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
}
export interface DataDatabricksTableTableInfoTableConstraints {
  /**
  * foreign_key_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#foreign_key_constraint DataDatabricksTable#foreign_key_constraint}
  */
  readonly foreignKeyConstraint?: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint;
  /**
  * named_table_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#named_table_constraint DataDatabricksTable#named_table_constraint}
  */
  readonly namedTableConstraint?: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint;
  /**
  * primary_key_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#primary_key_constraint DataDatabricksTable#primary_key_constraint}
  */
  readonly primaryKeyConstraint?: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint;
}

export function dataDatabricksTableTableInfoTableConstraintsToTerraform(struct?: DataDatabricksTableTableInfoTableConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    foreign_key_constraint: dataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintToTerraform(struct!.foreignKeyConstraint),
    named_table_constraint: dataDatabricksTableTableInfoTableConstraintsNamedTableConstraintToTerraform(struct!.namedTableConstraint),
    primary_key_constraint: dataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintToTerraform(struct!.primaryKeyConstraint),
  }
}


export function dataDatabricksTableTableInfoTableConstraintsToHclTerraform(struct?: DataDatabricksTableTableInfoTableConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    foreign_key_constraint: {
      value: dataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintToHclTerraform(struct!.foreignKeyConstraint),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintList",
    },
    named_table_constraint: {
      value: dataDatabricksTableTableInfoTableConstraintsNamedTableConstraintToHclTerraform(struct!.namedTableConstraint),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintList",
    },
    primary_key_constraint: {
      value: dataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintToHclTerraform(struct!.primaryKeyConstraint),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoTableConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksTableTableInfoTableConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._foreignKeyConstraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeyConstraint = this._foreignKeyConstraint?.internalValue;
    }
    if (this._namedTableConstraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedTableConstraint = this._namedTableConstraint?.internalValue;
    }
    if (this._primaryKeyConstraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeyConstraint = this._primaryKeyConstraint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoTableConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._foreignKeyConstraint.internalValue = undefined;
      this._namedTableConstraint.internalValue = undefined;
      this._primaryKeyConstraint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._foreignKeyConstraint.internalValue = value.foreignKeyConstraint;
      this._namedTableConstraint.internalValue = value.namedTableConstraint;
      this._primaryKeyConstraint.internalValue = value.primaryKeyConstraint;
    }
  }

  // foreign_key_constraint - computed: false, optional: true, required: false
  private _foreignKeyConstraint = new DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference(this, "foreign_key_constraint");
  public get foreignKeyConstraint() {
    return this._foreignKeyConstraint;
  }
  public putForeignKeyConstraint(value: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint) {
    this._foreignKeyConstraint.internalValue = value;
  }
  public resetForeignKeyConstraint() {
    this._foreignKeyConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeyConstraintInput() {
    return this._foreignKeyConstraint.internalValue;
  }

  // named_table_constraint - computed: false, optional: true, required: false
  private _namedTableConstraint = new DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference(this, "named_table_constraint");
  public get namedTableConstraint() {
    return this._namedTableConstraint;
  }
  public putNamedTableConstraint(value: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint) {
    this._namedTableConstraint.internalValue = value;
  }
  public resetNamedTableConstraint() {
    this._namedTableConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedTableConstraintInput() {
    return this._namedTableConstraint.internalValue;
  }

  // primary_key_constraint - computed: false, optional: true, required: false
  private _primaryKeyConstraint = new DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference(this, "primary_key_constraint");
  public get primaryKeyConstraint() {
    return this._primaryKeyConstraint;
  }
  public putPrimaryKeyConstraint(value: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint) {
    this._primaryKeyConstraint.internalValue = value;
  }
  public resetPrimaryKeyConstraint() {
    this._primaryKeyConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyConstraintInput() {
    return this._primaryKeyConstraint.internalValue;
  }
}

export class DataDatabricksTableTableInfoTableConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksTableTableInfoTableConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksTableTableInfoTableConstraintsOutputReference {
    return new DataDatabricksTableTableInfoTableConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksTableTableInfoViewDependenciesDependenciesFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#function_full_name DataDatabricksTable#function_full_name}
  */
  readonly functionFullName: string;
}

export function dataDatabricksTableTableInfoViewDependenciesDependenciesFunctionToTerraform(struct?: DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference | DataDatabricksTableTableInfoViewDependenciesDependenciesFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_full_name: cdktf.stringToTerraform(struct!.functionFullName),
  }
}


export function dataDatabricksTableTableInfoViewDependenciesDependenciesFunctionToHclTerraform(struct?: DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference | DataDatabricksTableTableInfoViewDependenciesDependenciesFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_full_name: {
      value: cdktf.stringToHclTerraform(struct!.functionFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoViewDependenciesDependenciesFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionFullName = this._functionFullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoViewDependenciesDependenciesFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionFullName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionFullName = value.functionFullName;
    }
  }

  // function_full_name - computed: false, optional: false, required: true
  private _functionFullName?: string; 
  public get functionFullName() {
    return this.getStringAttribute('function_full_name');
  }
  public set functionFullName(value: string) {
    this._functionFullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionFullNameInput() {
    return this._functionFullName;
  }
}
export interface DataDatabricksTableTableInfoViewDependenciesDependenciesTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#table_full_name DataDatabricksTable#table_full_name}
  */
  readonly tableFullName: string;
}

export function dataDatabricksTableTableInfoViewDependenciesDependenciesTableToTerraform(struct?: DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference | DataDatabricksTableTableInfoViewDependenciesDependenciesTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_full_name: cdktf.stringToTerraform(struct!.tableFullName),
  }
}


export function dataDatabricksTableTableInfoViewDependenciesDependenciesTableToHclTerraform(struct?: DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference | DataDatabricksTableTableInfoViewDependenciesDependenciesTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_full_name: {
      value: cdktf.stringToHclTerraform(struct!.tableFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoViewDependenciesDependenciesTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFullName = this._tableFullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoViewDependenciesDependenciesTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableFullName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableFullName = value.tableFullName;
    }
  }

  // table_full_name - computed: false, optional: false, required: true
  private _tableFullName?: string; 
  public get tableFullName() {
    return this.getStringAttribute('table_full_name');
  }
  public set tableFullName(value: string) {
    this._tableFullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFullNameInput() {
    return this._tableFullName;
  }
}
export interface DataDatabricksTableTableInfoViewDependenciesDependencies {
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#function DataDatabricksTable#function}
  */
  readonly function?: DataDatabricksTableTableInfoViewDependenciesDependenciesFunction;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#table DataDatabricksTable#table}
  */
  readonly table?: DataDatabricksTableTableInfoViewDependenciesDependenciesTable;
}

export function dataDatabricksTableTableInfoViewDependenciesDependenciesToTerraform(struct?: DataDatabricksTableTableInfoViewDependenciesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: dataDatabricksTableTableInfoViewDependenciesDependenciesFunctionToTerraform(struct!.function),
    table: dataDatabricksTableTableInfoViewDependenciesDependenciesTableToTerraform(struct!.table),
  }
}


export function dataDatabricksTableTableInfoViewDependenciesDependenciesToHclTerraform(struct?: DataDatabricksTableTableInfoViewDependenciesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: dataDatabricksTableTableInfoViewDependenciesDependenciesFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionList",
    },
    table: {
      value: dataDatabricksTableTableInfoViewDependenciesDependenciesTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoViewDependenciesDependenciesTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksTableTableInfoViewDependenciesDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoViewDependenciesDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._function.internalValue = undefined;
      this._table.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._function.internalValue = value.function;
      this._table.internalValue = value.table;
    }
  }

  // function - computed: false, optional: true, required: false
  private _function = new DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: DataDatabricksTableTableInfoViewDependenciesDependenciesFunction) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: DataDatabricksTableTableInfoViewDependenciesDependenciesTable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}

export class DataDatabricksTableTableInfoViewDependenciesDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksTableTableInfoViewDependenciesDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference {
    return new DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksTableTableInfoViewDependencies {
  /**
  * dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#dependencies DataDatabricksTable#dependencies}
  */
  readonly dependencies?: DataDatabricksTableTableInfoViewDependenciesDependencies[] | cdktf.IResolvable;
}

export function dataDatabricksTableTableInfoViewDependenciesToTerraform(struct?: DataDatabricksTableTableInfoViewDependenciesOutputReference | DataDatabricksTableTableInfoViewDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependencies: cdktf.listMapper(dataDatabricksTableTableInfoViewDependenciesDependenciesToTerraform, true)(struct!.dependencies),
  }
}


export function dataDatabricksTableTableInfoViewDependenciesToHclTerraform(struct?: DataDatabricksTableTableInfoViewDependenciesOutputReference | DataDatabricksTableTableInfoViewDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependencies: {
      value: cdktf.listMapperHcl(dataDatabricksTableTableInfoViewDependenciesDependenciesToHclTerraform, true)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoViewDependenciesDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoViewDependenciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfoViewDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfoViewDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependencies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependencies.internalValue = value.dependencies;
    }
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataDatabricksTableTableInfoViewDependenciesDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataDatabricksTableTableInfoViewDependenciesDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }
}
export interface DataDatabricksTableTableInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#access_point DataDatabricksTable#access_point}
  */
  readonly accessPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#browse_only DataDatabricksTable#browse_only}
  */
  readonly browseOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#catalog_name DataDatabricksTable#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#comment DataDatabricksTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#created_at DataDatabricksTable#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#created_by DataDatabricksTable#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#data_access_configuration_id DataDatabricksTable#data_access_configuration_id}
  */
  readonly dataAccessConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#data_source_format DataDatabricksTable#data_source_format}
  */
  readonly dataSourceFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#deleted_at DataDatabricksTable#deleted_at}
  */
  readonly deletedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#enable_predictive_optimization DataDatabricksTable#enable_predictive_optimization}
  */
  readonly enablePredictiveOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#full_name DataDatabricksTable#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#metastore_id DataDatabricksTable#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#name DataDatabricksTable#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#owner DataDatabricksTable#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#pipeline_id DataDatabricksTable#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#properties DataDatabricksTable#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#schema_name DataDatabricksTable#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#sql_path DataDatabricksTable#sql_path}
  */
  readonly sqlPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#storage_credential_name DataDatabricksTable#storage_credential_name}
  */
  readonly storageCredentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#storage_location DataDatabricksTable#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#table_id DataDatabricksTable#table_id}
  */
  readonly tableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#table_type DataDatabricksTable#table_type}
  */
  readonly tableType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#updated_at DataDatabricksTable#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#updated_by DataDatabricksTable#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#view_definition DataDatabricksTable#view_definition}
  */
  readonly viewDefinition?: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#columns DataDatabricksTable#columns}
  */
  readonly columns?: DataDatabricksTableTableInfoColumns[] | cdktf.IResolvable;
  /**
  * delta_runtime_properties_kvpairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#delta_runtime_properties_kvpairs DataDatabricksTable#delta_runtime_properties_kvpairs}
  */
  readonly deltaRuntimePropertiesKvpairs?: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs;
  /**
  * effective_predictive_optimization_flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#effective_predictive_optimization_flag DataDatabricksTable#effective_predictive_optimization_flag}
  */
  readonly effectivePredictiveOptimizationFlag?: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag;
  /**
  * encryption_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#encryption_details DataDatabricksTable#encryption_details}
  */
  readonly encryptionDetails?: DataDatabricksTableTableInfoEncryptionDetails;
  /**
  * row_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#row_filter DataDatabricksTable#row_filter}
  */
  readonly rowFilter?: DataDatabricksTableTableInfoRowFilter;
  /**
  * table_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#table_constraints DataDatabricksTable#table_constraints}
  */
  readonly tableConstraints?: DataDatabricksTableTableInfoTableConstraints[] | cdktf.IResolvable;
  /**
  * view_dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#view_dependencies DataDatabricksTable#view_dependencies}
  */
  readonly viewDependencies?: DataDatabricksTableTableInfoViewDependencies;
}

export function dataDatabricksTableTableInfoToTerraform(struct?: DataDatabricksTableTableInfoOutputReference | DataDatabricksTableTableInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point: cdktf.stringToTerraform(struct!.accessPoint),
    browse_only: cdktf.booleanToTerraform(struct!.browseOnly),
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    comment: cdktf.stringToTerraform(struct!.comment),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    data_access_configuration_id: cdktf.stringToTerraform(struct!.dataAccessConfigurationId),
    data_source_format: cdktf.stringToTerraform(struct!.dataSourceFormat),
    deleted_at: cdktf.numberToTerraform(struct!.deletedAt),
    enable_predictive_optimization: cdktf.stringToTerraform(struct!.enablePredictiveOptimization),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    metastore_id: cdktf.stringToTerraform(struct!.metastoreId),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    sql_path: cdktf.stringToTerraform(struct!.sqlPath),
    storage_credential_name: cdktf.stringToTerraform(struct!.storageCredentialName),
    storage_location: cdktf.stringToTerraform(struct!.storageLocation),
    table_id: cdktf.stringToTerraform(struct!.tableId),
    table_type: cdktf.stringToTerraform(struct!.tableType),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
    view_definition: cdktf.stringToTerraform(struct!.viewDefinition),
    columns: cdktf.listMapper(dataDatabricksTableTableInfoColumnsToTerraform, true)(struct!.columns),
    delta_runtime_properties_kvpairs: dataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsToTerraform(struct!.deltaRuntimePropertiesKvpairs),
    effective_predictive_optimization_flag: dataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagToTerraform(struct!.effectivePredictiveOptimizationFlag),
    encryption_details: dataDatabricksTableTableInfoEncryptionDetailsToTerraform(struct!.encryptionDetails),
    row_filter: dataDatabricksTableTableInfoRowFilterToTerraform(struct!.rowFilter),
    table_constraints: cdktf.listMapper(dataDatabricksTableTableInfoTableConstraintsToTerraform, true)(struct!.tableConstraints),
    view_dependencies: dataDatabricksTableTableInfoViewDependenciesToTerraform(struct!.viewDependencies),
  }
}


export function dataDatabricksTableTableInfoToHclTerraform(struct?: DataDatabricksTableTableInfoOutputReference | DataDatabricksTableTableInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point: {
      value: cdktf.stringToHclTerraform(struct!.accessPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    data_access_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.dataAccessConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source_format: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deleted_at: {
      value: cdktf.numberToHclTerraform(struct!.deletedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_predictive_optimization: {
      value: cdktf.stringToHclTerraform(struct!.enablePredictiveOptimization),
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
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_path: {
      value: cdktf.stringToHclTerraform(struct!.sqlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_credential_name: {
      value: cdktf.stringToHclTerraform(struct!.storageCredentialName),
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
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_type: {
      value: cdktf.stringToHclTerraform(struct!.tableType),
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
    view_definition: {
      value: cdktf.stringToHclTerraform(struct!.viewDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktf.listMapperHcl(dataDatabricksTableTableInfoColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoColumnsList",
    },
    delta_runtime_properties_kvpairs: {
      value: dataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsToHclTerraform(struct!.deltaRuntimePropertiesKvpairs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsList",
    },
    effective_predictive_optimization_flag: {
      value: dataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagToHclTerraform(struct!.effectivePredictiveOptimizationFlag),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagList",
    },
    encryption_details: {
      value: dataDatabricksTableTableInfoEncryptionDetailsToHclTerraform(struct!.encryptionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoEncryptionDetailsList",
    },
    row_filter: {
      value: dataDatabricksTableTableInfoRowFilterToHclTerraform(struct!.rowFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoRowFilterList",
    },
    table_constraints: {
      value: cdktf.listMapperHcl(dataDatabricksTableTableInfoTableConstraintsToHclTerraform, true)(struct!.tableConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoTableConstraintsList",
    },
    view_dependencies: {
      value: dataDatabricksTableTableInfoViewDependenciesToHclTerraform(struct!.viewDependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksTableTableInfoViewDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksTableTableInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksTableTableInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPoint = this._accessPoint;
    }
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
    if (this._dataAccessConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccessConfigurationId = this._dataAccessConfigurationId;
    }
    if (this._dataSourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFormat = this._dataSourceFormat;
    }
    if (this._deletedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedAt = this._deletedAt;
    }
    if (this._enablePredictiveOptimization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePredictiveOptimization = this._enablePredictiveOptimization;
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
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._sqlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlPath = this._sqlPath;
    }
    if (this._storageCredentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCredentialName = this._storageCredentialName;
    }
    if (this._storageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    if (this._tableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableType = this._tableType;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    if (this._viewDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewDefinition = this._viewDefinition;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._deltaRuntimePropertiesKvpairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaRuntimePropertiesKvpairs = this._deltaRuntimePropertiesKvpairs?.internalValue;
    }
    if (this._effectivePredictiveOptimizationFlag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectivePredictiveOptimizationFlag = this._effectivePredictiveOptimizationFlag?.internalValue;
    }
    if (this._encryptionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionDetails = this._encryptionDetails?.internalValue;
    }
    if (this._rowFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter?.internalValue;
    }
    if (this._tableConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConstraints = this._tableConstraints?.internalValue;
    }
    if (this._viewDependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewDependencies = this._viewDependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksTableTableInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessPoint = undefined;
      this._browseOnly = undefined;
      this._catalogName = undefined;
      this._comment = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._dataAccessConfigurationId = undefined;
      this._dataSourceFormat = undefined;
      this._deletedAt = undefined;
      this._enablePredictiveOptimization = undefined;
      this._fullName = undefined;
      this._metastoreId = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._pipelineId = undefined;
      this._properties = undefined;
      this._schemaName = undefined;
      this._sqlPath = undefined;
      this._storageCredentialName = undefined;
      this._storageLocation = undefined;
      this._tableId = undefined;
      this._tableType = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
      this._viewDefinition = undefined;
      this._columns.internalValue = undefined;
      this._deltaRuntimePropertiesKvpairs.internalValue = undefined;
      this._effectivePredictiveOptimizationFlag.internalValue = undefined;
      this._encryptionDetails.internalValue = undefined;
      this._rowFilter.internalValue = undefined;
      this._tableConstraints.internalValue = undefined;
      this._viewDependencies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessPoint = value.accessPoint;
      this._browseOnly = value.browseOnly;
      this._catalogName = value.catalogName;
      this._comment = value.comment;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._dataAccessConfigurationId = value.dataAccessConfigurationId;
      this._dataSourceFormat = value.dataSourceFormat;
      this._deletedAt = value.deletedAt;
      this._enablePredictiveOptimization = value.enablePredictiveOptimization;
      this._fullName = value.fullName;
      this._metastoreId = value.metastoreId;
      this._name = value.name;
      this._owner = value.owner;
      this._pipelineId = value.pipelineId;
      this._properties = value.properties;
      this._schemaName = value.schemaName;
      this._sqlPath = value.sqlPath;
      this._storageCredentialName = value.storageCredentialName;
      this._storageLocation = value.storageLocation;
      this._tableId = value.tableId;
      this._tableType = value.tableType;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
      this._viewDefinition = value.viewDefinition;
      this._columns.internalValue = value.columns;
      this._deltaRuntimePropertiesKvpairs.internalValue = value.deltaRuntimePropertiesKvpairs;
      this._effectivePredictiveOptimizationFlag.internalValue = value.effectivePredictiveOptimizationFlag;
      this._encryptionDetails.internalValue = value.encryptionDetails;
      this._rowFilter.internalValue = value.rowFilter;
      this._tableConstraints.internalValue = value.tableConstraints;
      this._viewDependencies.internalValue = value.viewDependencies;
    }
  }

  // access_point - computed: false, optional: true, required: false
  private _accessPoint?: string; 
  public get accessPoint() {
    return this.getStringAttribute('access_point');
  }
  public set accessPoint(value: string) {
    this._accessPoint = value;
  }
  public resetAccessPoint() {
    this._accessPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointInput() {
    return this._accessPoint;
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

  // data_access_configuration_id - computed: false, optional: true, required: false
  private _dataAccessConfigurationId?: string; 
  public get dataAccessConfigurationId() {
    return this.getStringAttribute('data_access_configuration_id');
  }
  public set dataAccessConfigurationId(value: string) {
    this._dataAccessConfigurationId = value;
  }
  public resetDataAccessConfigurationId() {
    this._dataAccessConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessConfigurationIdInput() {
    return this._dataAccessConfigurationId;
  }

  // data_source_format - computed: false, optional: true, required: false
  private _dataSourceFormat?: string; 
  public get dataSourceFormat() {
    return this.getStringAttribute('data_source_format');
  }
  public set dataSourceFormat(value: string) {
    this._dataSourceFormat = value;
  }
  public resetDataSourceFormat() {
    this._dataSourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFormatInput() {
    return this._dataSourceFormat;
  }

  // deleted_at - computed: false, optional: true, required: false
  private _deletedAt?: number; 
  public get deletedAt() {
    return this.getNumberAttribute('deleted_at');
  }
  public set deletedAt(value: number) {
    this._deletedAt = value;
  }
  public resetDeletedAt() {
    this._deletedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedAtInput() {
    return this._deletedAt;
  }

  // enable_predictive_optimization - computed: false, optional: true, required: false
  private _enablePredictiveOptimization?: string; 
  public get enablePredictiveOptimization() {
    return this.getStringAttribute('enable_predictive_optimization');
  }
  public set enablePredictiveOptimization(value: string) {
    this._enablePredictiveOptimization = value;
  }
  public resetEnablePredictiveOptimization() {
    this._enablePredictiveOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePredictiveOptimizationInput() {
    return this._enablePredictiveOptimization;
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

  // pipeline_id - computed: false, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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

  // sql_path - computed: false, optional: true, required: false
  private _sqlPath?: string; 
  public get sqlPath() {
    return this.getStringAttribute('sql_path');
  }
  public set sqlPath(value: string) {
    this._sqlPath = value;
  }
  public resetSqlPath() {
    this._sqlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlPathInput() {
    return this._sqlPath;
  }

  // storage_credential_name - computed: false, optional: true, required: false
  private _storageCredentialName?: string; 
  public get storageCredentialName() {
    return this.getStringAttribute('storage_credential_name');
  }
  public set storageCredentialName(value: string) {
    this._storageCredentialName = value;
  }
  public resetStorageCredentialName() {
    this._storageCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCredentialNameInput() {
    return this._storageCredentialName;
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

  // table_id - computed: false, optional: true, required: false
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  public resetTableId() {
    this._tableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // table_type - computed: false, optional: true, required: false
  private _tableType?: string; 
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string) {
    this._tableType = value;
  }
  public resetTableType() {
    this._tableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType;
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

  // view_definition - computed: false, optional: true, required: false
  private _viewDefinition?: string; 
  public get viewDefinition() {
    return this.getStringAttribute('view_definition');
  }
  public set viewDefinition(value: string) {
    this._viewDefinition = value;
  }
  public resetViewDefinition() {
    this._viewDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewDefinitionInput() {
    return this._viewDefinition;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DataDatabricksTableTableInfoColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DataDatabricksTableTableInfoColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // delta_runtime_properties_kvpairs - computed: false, optional: true, required: false
  private _deltaRuntimePropertiesKvpairs = new DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference(this, "delta_runtime_properties_kvpairs");
  public get deltaRuntimePropertiesKvpairs() {
    return this._deltaRuntimePropertiesKvpairs;
  }
  public putDeltaRuntimePropertiesKvpairs(value: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs) {
    this._deltaRuntimePropertiesKvpairs.internalValue = value;
  }
  public resetDeltaRuntimePropertiesKvpairs() {
    this._deltaRuntimePropertiesKvpairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaRuntimePropertiesKvpairsInput() {
    return this._deltaRuntimePropertiesKvpairs.internalValue;
  }

  // effective_predictive_optimization_flag - computed: false, optional: true, required: false
  private _effectivePredictiveOptimizationFlag = new DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference(this, "effective_predictive_optimization_flag");
  public get effectivePredictiveOptimizationFlag() {
    return this._effectivePredictiveOptimizationFlag;
  }
  public putEffectivePredictiveOptimizationFlag(value: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag) {
    this._effectivePredictiveOptimizationFlag.internalValue = value;
  }
  public resetEffectivePredictiveOptimizationFlag() {
    this._effectivePredictiveOptimizationFlag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectivePredictiveOptimizationFlagInput() {
    return this._effectivePredictiveOptimizationFlag.internalValue;
  }

  // encryption_details - computed: false, optional: true, required: false
  private _encryptionDetails = new DataDatabricksTableTableInfoEncryptionDetailsOutputReference(this, "encryption_details");
  public get encryptionDetails() {
    return this._encryptionDetails;
  }
  public putEncryptionDetails(value: DataDatabricksTableTableInfoEncryptionDetails) {
    this._encryptionDetails.internalValue = value;
  }
  public resetEncryptionDetails() {
    this._encryptionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDetailsInput() {
    return this._encryptionDetails.internalValue;
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter = new DataDatabricksTableTableInfoRowFilterOutputReference(this, "row_filter");
  public get rowFilter() {
    return this._rowFilter;
  }
  public putRowFilter(value: DataDatabricksTableTableInfoRowFilter) {
    this._rowFilter.internalValue = value;
  }
  public resetRowFilter() {
    this._rowFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter.internalValue;
  }

  // table_constraints - computed: false, optional: true, required: false
  private _tableConstraints = new DataDatabricksTableTableInfoTableConstraintsList(this, "table_constraints", false);
  public get tableConstraints() {
    return this._tableConstraints;
  }
  public putTableConstraints(value: DataDatabricksTableTableInfoTableConstraints[] | cdktf.IResolvable) {
    this._tableConstraints.internalValue = value;
  }
  public resetTableConstraints() {
    this._tableConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConstraintsInput() {
    return this._tableConstraints.internalValue;
  }

  // view_dependencies - computed: false, optional: true, required: false
  private _viewDependencies = new DataDatabricksTableTableInfoViewDependenciesOutputReference(this, "view_dependencies");
  public get viewDependencies() {
    return this._viewDependencies;
  }
  public putViewDependencies(value: DataDatabricksTableTableInfoViewDependencies) {
    this._viewDependencies.internalValue = value;
  }
  public resetViewDependencies() {
    this._viewDependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewDependenciesInput() {
    return this._viewDependencies.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table databricks_table}
*/
export class DataDatabricksTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksTable to import
  * @param importFromId The id of the existing DataDatabricksTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/table databricks_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksTableConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_table',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.65.0',
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
    this._name = config.name;
    this._tableInfo.internalValue = config.tableInfo;
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

  // table_info - computed: false, optional: true, required: false
  private _tableInfo = new DataDatabricksTableTableInfoOutputReference(this, "table_info");
  public get tableInfo() {
    return this._tableInfo;
  }
  public putTableInfo(value: DataDatabricksTableTableInfo) {
    this._tableInfo.internalValue = value;
  }
  public resetTableInfo() {
    this._tableInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInfoInput() {
    return this._tableInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      table_info: dataDatabricksTableTableInfoToTerraform(this._tableInfo.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_info: {
        value: dataDatabricksTableTableInfoToHclTerraform(this._tableInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksTableTableInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
