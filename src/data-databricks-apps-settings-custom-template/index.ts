/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAppsSettingsCustomTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}
  */
  readonly name: string;
}
export interface DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
    }
  }

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
    }
  }

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
    }
  }

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
    }
  }

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#securable_type DataDatabricksAppsSettingsCustomTemplate#securable_type}
  */
  readonly securableType: string;
}

export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
    securable_type: cdktf.stringToTerraform(struct!.securableType),
  }
}


export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    securable_type: {
      value: cdktf.stringToHclTerraform(struct!.securableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._securableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securableType = this._securableType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
      this._securableType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
      this._securableType = value.securableType;
    }
  }

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // securable_type - computed: true, optional: false, required: true
  private _securableType?: string; 
  public get securableType() {
    return this.getStringAttribute('securable_type');
  }
  public set securableType(value: string) {
    this._securableType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securableTypeInput() {
    return this._securableType;
  }
}
export interface DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#job_spec DataDatabricksAppsSettingsCustomTemplate#job_spec}
  */
  readonly jobSpec?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#secret_spec DataDatabricksAppsSettingsCustomTemplate#secret_spec}
  */
  readonly secretSpec?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplate#serving_endpoint_spec}
  */
  readonly servingEndpointSpec?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplate#sql_warehouse_spec}
  */
  readonly sqlWarehouseSpec?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#uc_securable_spec DataDatabricksAppsSettingsCustomTemplate#uc_securable_spec}
  */
  readonly ucSecurableSpec?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec;
}

export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    job_spec: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecToTerraform(struct!.jobSpec),
    name: cdktf.stringToTerraform(struct!.name),
    secret_spec: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecToTerraform(struct!.secretSpec),
    serving_endpoint_spec: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecToTerraform(struct!.servingEndpointSpec),
    sql_warehouse_spec: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecToTerraform(struct!.sqlWarehouseSpec),
    uc_securable_spec: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecToTerraform(struct!.ucSecurableSpec),
  }
}


export function dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_spec: {
      value: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecToHclTerraform(struct!.jobSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_spec: {
      value: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecToHclTerraform(struct!.secretSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec",
    },
    serving_endpoint_spec: {
      value: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecToHclTerraform(struct!.servingEndpointSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec",
    },
    sql_warehouse_spec: {
      value: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecToHclTerraform(struct!.sqlWarehouseSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec",
    },
    uc_securable_spec: {
      value: dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecToHclTerraform(struct!.ucSecurableSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._jobSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobSpec = this._jobSpec?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretSpec = this._secretSpec?.internalValue;
    }
    if (this._servingEndpointSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servingEndpointSpec = this._servingEndpointSpec?.internalValue;
    }
    if (this._sqlWarehouseSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlWarehouseSpec = this._sqlWarehouseSpec?.internalValue;
    }
    if (this._ucSecurableSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucSecurableSpec = this._ucSecurableSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._jobSpec.internalValue = undefined;
      this._name = undefined;
      this._secretSpec.internalValue = undefined;
      this._servingEndpointSpec.internalValue = undefined;
      this._sqlWarehouseSpec.internalValue = undefined;
      this._ucSecurableSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._jobSpec.internalValue = value.jobSpec;
      this._name = value.name;
      this._secretSpec.internalValue = value.secretSpec;
      this._servingEndpointSpec.internalValue = value.servingEndpointSpec;
      this._sqlWarehouseSpec.internalValue = value.sqlWarehouseSpec;
      this._ucSecurableSpec.internalValue = value.ucSecurableSpec;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // job_spec - computed: true, optional: true, required: false
  private _jobSpec = new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference(this, "job_spec");
  public get jobSpec() {
    return this._jobSpec;
  }
  public putJobSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec) {
    this._jobSpec.internalValue = value;
  }
  public resetJobSpec() {
    this._jobSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSpecInput() {
    return this._jobSpec.internalValue;
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

  // secret_spec - computed: true, optional: true, required: false
  private _secretSpec = new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference(this, "secret_spec");
  public get secretSpec() {
    return this._secretSpec;
  }
  public putSecretSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec) {
    this._secretSpec.internalValue = value;
  }
  public resetSecretSpec() {
    this._secretSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretSpecInput() {
    return this._secretSpec.internalValue;
  }

  // serving_endpoint_spec - computed: true, optional: true, required: false
  private _servingEndpointSpec = new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference(this, "serving_endpoint_spec");
  public get servingEndpointSpec() {
    return this._servingEndpointSpec;
  }
  public putServingEndpointSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec) {
    this._servingEndpointSpec.internalValue = value;
  }
  public resetServingEndpointSpec() {
    this._servingEndpointSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingEndpointSpecInput() {
    return this._servingEndpointSpec.internalValue;
  }

  // sql_warehouse_spec - computed: true, optional: true, required: false
  private _sqlWarehouseSpec = new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference(this, "sql_warehouse_spec");
  public get sqlWarehouseSpec() {
    return this._sqlWarehouseSpec;
  }
  public putSqlWarehouseSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec) {
    this._sqlWarehouseSpec.internalValue = value;
  }
  public resetSqlWarehouseSpec() {
    this._sqlWarehouseSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlWarehouseSpecInput() {
    return this._sqlWarehouseSpec.internalValue;
  }

  // uc_securable_spec - computed: true, optional: true, required: false
  private _ucSecurableSpec = new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference(this, "uc_securable_spec");
  public get ucSecurableSpec() {
    return this._ucSecurableSpec;
  }
  public putUcSecurableSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec) {
    this._ucSecurableSpec.internalValue = value;
  }
  public resetUcSecurableSpec() {
    this._ucSecurableSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucSecurableSpecInput() {
    return this._ucSecurableSpec.internalValue;
  }
}

export class DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference {
    return new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAppsSettingsCustomTemplateManifest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#resource_specs DataDatabricksAppsSettingsCustomTemplate#resource_specs}
  */
  readonly resourceSpecs?: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#version DataDatabricksAppsSettingsCustomTemplate#version}
  */
  readonly version: number;
}

export function dataDatabricksAppsSettingsCustomTemplateManifestToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    resource_specs: cdktf.listMapper(dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsToTerraform, false)(struct!.resourceSpecs),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function dataDatabricksAppsSettingsCustomTemplateManifestToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplateManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    resource_specs: {
      value: cdktf.listMapperHcl(dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsToHclTerraform, false)(struct!.resourceSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplateManifestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplateManifest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSpecs = this._resourceSpecs?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplateManifest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._resourceSpecs.internalValue = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._resourceSpecs.internalValue = value.resourceSpecs;
      this._version = value.version;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // resource_specs - computed: true, optional: true, required: false
  private _resourceSpecs = new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList(this, "resource_specs", false);
  public get resourceSpecs() {
    return this._resourceSpecs;
  }
  public putResourceSpecs(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs[] | cdktf.IResolvable) {
    this._resourceSpecs.internalValue = value;
  }
  public resetResourceSpecs() {
    this._resourceSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecsInput() {
    return this._resourceSpecs.internalValue;
  }

  // version - computed: true, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template databricks_apps_settings_custom_template}
*/
export class DataDatabricksAppsSettingsCustomTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_apps_settings_custom_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksAppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAppsSettingsCustomTemplate to import
  * @param importFromId The id of the existing DataDatabricksAppsSettingsCustomTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAppsSettingsCustomTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_apps_settings_custom_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/apps_settings_custom_template databricks_apps_settings_custom_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAppsSettingsCustomTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAppsSettingsCustomTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_apps_settings_custom_template',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.96.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // git_provider - computed: true, optional: false, required: false
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }

  // git_repo - computed: true, optional: false, required: false
  public get gitRepo() {
    return this.getStringAttribute('git_repo');
  }

  // manifest - computed: true, optional: false, required: false
  private _manifest = new DataDatabricksAppsSettingsCustomTemplateManifestOutputReference(this, "manifest");
  public get manifest() {
    return this._manifest;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
