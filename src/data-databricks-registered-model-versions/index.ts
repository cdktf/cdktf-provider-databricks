// https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksRegisteredModelVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}
  */
  readonly fullName: string;
  /**
  * model_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}
  */
  readonly modelVersions?: DataDatabricksRegisteredModelVersionsModelVersions[] | cdktf.IResolvable;
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#alias_name DataDatabricksRegisteredModelVersions#alias_name}
  */
  readonly aliasName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#version_num DataDatabricksRegisteredModelVersions#version_num}
  */
  readonly versionNum?: number;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsAliasesToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_name: cdktf.stringToTerraform(struct!.aliasName),
    version_num: cdktf.numberToTerraform(struct!.versionNum),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsAliasesToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsAliases | cdktf.IResolvable): any {
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

export class DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsAliases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsAliases | cdktf.IResolvable | undefined) {
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

export class DataDatabricksRegisteredModelVersionsModelVersionsAliasesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsAliases[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#function_full_name DataDatabricksRegisteredModelVersions#function_full_name}
  */
  readonly functionFullName: string;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_full_name: cdktf.stringToTerraform(struct!.functionFullName),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction | cdktf.IResolvable): any {
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

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionFullName = this._functionFullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionFullName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#table_full_name DataDatabricksRegisteredModelVersions#table_full_name}
  */
  readonly tableFullName: string;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_full_name: cdktf.stringToTerraform(struct!.tableFullName),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable | cdktf.IResolvable): any {
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

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFullName = this._tableFullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableFullName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies {
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#function DataDatabricksRegisteredModelVersions#function}
  */
  readonly function?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] | cdktf.IResolvable;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#table DataDatabricksRegisteredModelVersions#table}
  */
  readonly table?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] | cdktf.IResolvable;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionToTerraform, true)(struct!.function),
    table: cdktf.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableToTerraform, true)(struct!.table),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionToHclTerraform, true)(struct!.function),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList",
    },
    table: {
      value: cdktf.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableToHclTerraform, true)(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies | cdktf.IResolvable | undefined) {
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
  private _function = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList(this, "function", false);
  public get function() {
    return this._function;
  }
  public putFunction(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] | cdktf.IResolvable) {
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
  private _table = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList(this, "table", false);
  public get table() {
    return this._table;
  }
  public putTable(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] | cdktf.IResolvable) {
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

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies {
  /**
  * dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#dependencies DataDatabricksRegisteredModelVersions#dependencies}
  */
  readonly dependencies?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] | cdktf.IResolvable;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependencies: cdktf.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesToTerraform, true)(struct!.dependencies),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependencies: {
      value: cdktf.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesToHclTerraform, true)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = value.dependencies;
    }
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] | cdktf.IResolvable) {
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

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#browse_only DataDatabricksRegisteredModelVersions#browse_only}
  */
  readonly browseOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#comment DataDatabricksRegisteredModelVersions#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#created_at DataDatabricksRegisteredModelVersions#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#created_by DataDatabricksRegisteredModelVersions#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#metastore_id DataDatabricksRegisteredModelVersions#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#run_id DataDatabricksRegisteredModelVersions#run_id}
  */
  readonly runId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#run_workspace_id DataDatabricksRegisteredModelVersions#run_workspace_id}
  */
  readonly runWorkspaceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#source DataDatabricksRegisteredModelVersions#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#status DataDatabricksRegisteredModelVersions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#storage_location DataDatabricksRegisteredModelVersions#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#updated_at DataDatabricksRegisteredModelVersions#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#updated_by DataDatabricksRegisteredModelVersions#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#version DataDatabricksRegisteredModelVersions#version}
  */
  readonly version?: number;
  /**
  * aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#aliases DataDatabricksRegisteredModelVersions#aliases}
  */
  readonly aliases?: DataDatabricksRegisteredModelVersionsModelVersionsAliases[] | cdktf.IResolvable;
  /**
  * model_version_dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#model_version_dependencies DataDatabricksRegisteredModelVersions#model_version_dependencies}
  */
  readonly modelVersionDependencies?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] | cdktf.IResolvable;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersions | cdktf.IResolvable): any {
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
    id: cdktf.stringToTerraform(struct!.id),
    metastore_id: cdktf.stringToTerraform(struct!.metastoreId),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    run_id: cdktf.stringToTerraform(struct!.runId),
    run_workspace_id: cdktf.numberToTerraform(struct!.runWorkspaceId),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    source: cdktf.stringToTerraform(struct!.source),
    status: cdktf.stringToTerraform(struct!.status),
    storage_location: cdktf.stringToTerraform(struct!.storageLocation),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
    version: cdktf.numberToTerraform(struct!.version),
    aliases: cdktf.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsAliasesToTerraform, true)(struct!.aliases),
    model_version_dependencies: cdktf.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesToTerraform, true)(struct!.modelVersionDependencies),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersions | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_id: {
      value: cdktf.stringToHclTerraform(struct!.runId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_workspace_id: {
      value: cdktf.numberToHclTerraform(struct!.runWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aliases: {
      value: cdktf.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsAliasesToHclTerraform, true)(struct!.aliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsAliasesList",
    },
    model_version_dependencies: {
      value: cdktf.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesToHclTerraform, true)(struct!.modelVersionDependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersions | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreId = this._metastoreId;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._runId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runId = this._runId;
    }
    if (this._runWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runWorkspaceId = this._runWorkspaceId;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._aliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases?.internalValue;
    }
    if (this._modelVersionDependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersionDependencies = this._modelVersionDependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._browseOnly = undefined;
      this._catalogName = undefined;
      this._comment = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._id = undefined;
      this._metastoreId = undefined;
      this._modelName = undefined;
      this._runId = undefined;
      this._runWorkspaceId = undefined;
      this._schemaName = undefined;
      this._source = undefined;
      this._status = undefined;
      this._storageLocation = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
      this._version = undefined;
      this._aliases.internalValue = undefined;
      this._modelVersionDependencies.internalValue = undefined;
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
      this._id = value.id;
      this._metastoreId = value.metastoreId;
      this._modelName = value.modelName;
      this._runId = value.runId;
      this._runWorkspaceId = value.runWorkspaceId;
      this._schemaName = value.schemaName;
      this._source = value.source;
      this._status = value.status;
      this._storageLocation = value.storageLocation;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
      this._version = value.version;
      this._aliases.internalValue = value.aliases;
      this._modelVersionDependencies.internalValue = value.modelVersionDependencies;
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

  // id - computed: false, optional: true, required: false
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

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // run_id - computed: false, optional: true, required: false
  private _runId?: string; 
  public get runId() {
    return this.getStringAttribute('run_id');
  }
  public set runId(value: string) {
    this._runId = value;
  }
  public resetRunId() {
    this._runId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIdInput() {
    return this._runId;
  }

  // run_workspace_id - computed: false, optional: true, required: false
  private _runWorkspaceId?: number; 
  public get runWorkspaceId() {
    return this.getNumberAttribute('run_workspace_id');
  }
  public set runWorkspaceId(value: number) {
    this._runWorkspaceId = value;
  }
  public resetRunWorkspaceId() {
    this._runWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runWorkspaceIdInput() {
    return this._runWorkspaceId;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases = new DataDatabricksRegisteredModelVersionsModelVersionsAliasesList(this, "aliases", false);
  public get aliases() {
    return this._aliases;
  }
  public putAliases(value: DataDatabricksRegisteredModelVersionsModelVersionsAliases[] | cdktf.IResolvable) {
    this._aliases.internalValue = value;
  }
  public resetAliases() {
    this._aliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases.internalValue;
  }

  // model_version_dependencies - computed: false, optional: true, required: false
  private _modelVersionDependencies = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList(this, "model_version_dependencies", false);
  public get modelVersionDependencies() {
    return this._modelVersionDependencies;
  }
  public putModelVersionDependencies(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] | cdktf.IResolvable) {
    this._modelVersionDependencies.internalValue = value;
  }
  public resetModelVersionDependencies() {
    this._modelVersionDependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionDependenciesInput() {
    return this._modelVersionDependencies.internalValue;
  }
}

export class DataDatabricksRegisteredModelVersionsModelVersionsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersions[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions databricks_registered_model_versions}
*/
export class DataDatabricksRegisteredModelVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_registered_model_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksRegisteredModelVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksRegisteredModelVersions to import
  * @param importFromId The id of the existing DataDatabricksRegisteredModelVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksRegisteredModelVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_registered_model_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/data-sources/registered_model_versions databricks_registered_model_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksRegisteredModelVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksRegisteredModelVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_registered_model_versions',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.60.0',
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
    this._modelVersions.internalValue = config.modelVersions;
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

  // model_versions - computed: false, optional: true, required: false
  private _modelVersions = new DataDatabricksRegisteredModelVersionsModelVersionsList(this, "model_versions", false);
  public get modelVersions() {
    return this._modelVersions;
  }
  public putModelVersions(value: DataDatabricksRegisteredModelVersionsModelVersions[] | cdktf.IResolvable) {
    this._modelVersions.internalValue = value;
  }
  public resetModelVersions() {
    this._modelVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionsInput() {
    return this._modelVersions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_name: cdktf.stringToTerraform(this._fullName),
      model_versions: cdktf.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsToTerraform, true)(this._modelVersions.internalValue),
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
      model_versions: {
        value: cdktf.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsToHclTerraform, true)(this._modelVersions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
