/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsSettingsCustomTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}
  */
  readonly gitProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}
  */
  readonly gitRepo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}
  */
  readonly manifest: AppsSettingsCustomTemplateManifest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#workspace_id AppsSettingsCustomTemplate#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface AppsSettingsCustomTemplateManifestResourceSpecsJobSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
}

export function appsSettingsCustomTemplateManifestResourceSpecsJobSpecToTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsJobSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function appsSettingsCustomTemplateManifestResourceSpecsJobSpecToHclTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsJobSpec | cdktf.IResolvable): any {
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

export class AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsSettingsCustomTemplateManifestResourceSpecsJobSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsSettingsCustomTemplateManifestResourceSpecsJobSpec | cdktf.IResolvable | undefined) {
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

  // permission - computed: false, optional: false, required: true
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
export interface AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
}

export function appsSettingsCustomTemplateManifestResourceSpecsSecretSpecToTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function appsSettingsCustomTemplateManifestResourceSpecsSecretSpecToHclTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec | cdktf.IResolvable): any {
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

export class AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec | cdktf.IResolvable | undefined) {
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

  // permission - computed: false, optional: false, required: true
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
export interface AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
}

export function appsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecToTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function appsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecToHclTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec | cdktf.IResolvable): any {
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

export class AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec | cdktf.IResolvable | undefined) {
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

  // permission - computed: false, optional: false, required: true
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
export interface AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
}

export function appsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecToTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function appsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecToHclTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec | cdktf.IResolvable): any {
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

export class AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec | cdktf.IResolvable | undefined) {
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

  // permission - computed: false, optional: false, required: true
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
export interface AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#securable_type AppsSettingsCustomTemplate#securable_type}
  */
  readonly securableType: string;
}

export function appsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecToTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
    securable_type: cdktf.stringToTerraform(struct!.securableType),
  }
}


export function appsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecToHclTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec | cdktf.IResolvable): any {
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

export class AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec | cdktf.IResolvable | undefined) {
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

  // permission - computed: false, optional: false, required: true
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

  // securable_type - computed: false, optional: false, required: true
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
export interface AppsSettingsCustomTemplateManifestResourceSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#job_spec AppsSettingsCustomTemplate#job_spec}
  */
  readonly jobSpec?: AppsSettingsCustomTemplateManifestResourceSpecsJobSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#secret_spec AppsSettingsCustomTemplate#secret_spec}
  */
  readonly secretSpec?: AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#serving_endpoint_spec AppsSettingsCustomTemplate#serving_endpoint_spec}
  */
  readonly servingEndpointSpec?: AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#sql_warehouse_spec AppsSettingsCustomTemplate#sql_warehouse_spec}
  */
  readonly sqlWarehouseSpec?: AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#uc_securable_spec AppsSettingsCustomTemplate#uc_securable_spec}
  */
  readonly ucSecurableSpec?: AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec;
}

export function appsSettingsCustomTemplateManifestResourceSpecsToTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    job_spec: appsSettingsCustomTemplateManifestResourceSpecsJobSpecToTerraform(struct!.jobSpec),
    name: cdktf.stringToTerraform(struct!.name),
    secret_spec: appsSettingsCustomTemplateManifestResourceSpecsSecretSpecToTerraform(struct!.secretSpec),
    serving_endpoint_spec: appsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecToTerraform(struct!.servingEndpointSpec),
    sql_warehouse_spec: appsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecToTerraform(struct!.sqlWarehouseSpec),
    uc_securable_spec: appsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecToTerraform(struct!.ucSecurableSpec),
  }
}


export function appsSettingsCustomTemplateManifestResourceSpecsToHclTerraform(struct?: AppsSettingsCustomTemplateManifestResourceSpecs | cdktf.IResolvable): any {
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
      value: appsSettingsCustomTemplateManifestResourceSpecsJobSpecToHclTerraform(struct!.jobSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsSettingsCustomTemplateManifestResourceSpecsJobSpec",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_spec: {
      value: appsSettingsCustomTemplateManifestResourceSpecsSecretSpecToHclTerraform(struct!.secretSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec",
    },
    serving_endpoint_spec: {
      value: appsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecToHclTerraform(struct!.servingEndpointSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec",
    },
    sql_warehouse_spec: {
      value: appsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecToHclTerraform(struct!.sqlWarehouseSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec",
    },
    uc_securable_spec: {
      value: appsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecToHclTerraform(struct!.ucSecurableSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsSettingsCustomTemplateManifestResourceSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsSettingsCustomTemplateManifestResourceSpecs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsSettingsCustomTemplateManifestResourceSpecs | cdktf.IResolvable | undefined) {
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

  // description - computed: false, optional: true, required: false
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

  // job_spec - computed: false, optional: true, required: false
  private _jobSpec = new AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference(this, "job_spec");
  public get jobSpec() {
    return this._jobSpec;
  }
  public putJobSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsJobSpec) {
    this._jobSpec.internalValue = value;
  }
  public resetJobSpec() {
    this._jobSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSpecInput() {
    return this._jobSpec.internalValue;
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

  // secret_spec - computed: false, optional: true, required: false
  private _secretSpec = new AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference(this, "secret_spec");
  public get secretSpec() {
    return this._secretSpec;
  }
  public putSecretSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec) {
    this._secretSpec.internalValue = value;
  }
  public resetSecretSpec() {
    this._secretSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretSpecInput() {
    return this._secretSpec.internalValue;
  }

  // serving_endpoint_spec - computed: false, optional: true, required: false
  private _servingEndpointSpec = new AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference(this, "serving_endpoint_spec");
  public get servingEndpointSpec() {
    return this._servingEndpointSpec;
  }
  public putServingEndpointSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec) {
    this._servingEndpointSpec.internalValue = value;
  }
  public resetServingEndpointSpec() {
    this._servingEndpointSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingEndpointSpecInput() {
    return this._servingEndpointSpec.internalValue;
  }

  // sql_warehouse_spec - computed: false, optional: true, required: false
  private _sqlWarehouseSpec = new AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference(this, "sql_warehouse_spec");
  public get sqlWarehouseSpec() {
    return this._sqlWarehouseSpec;
  }
  public putSqlWarehouseSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec) {
    this._sqlWarehouseSpec.internalValue = value;
  }
  public resetSqlWarehouseSpec() {
    this._sqlWarehouseSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlWarehouseSpecInput() {
    return this._sqlWarehouseSpec.internalValue;
  }

  // uc_securable_spec - computed: false, optional: true, required: false
  private _ucSecurableSpec = new AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference(this, "uc_securable_spec");
  public get ucSecurableSpec() {
    return this._ucSecurableSpec;
  }
  public putUcSecurableSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec) {
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

export class AppsSettingsCustomTemplateManifestResourceSpecsList extends cdktf.ComplexList {
  public internalValue? : AppsSettingsCustomTemplateManifestResourceSpecs[] | cdktf.IResolvable

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
  public get(index: number): AppsSettingsCustomTemplateManifestResourceSpecsOutputReference {
    return new AppsSettingsCustomTemplateManifestResourceSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsSettingsCustomTemplateManifest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#resource_specs AppsSettingsCustomTemplate#resource_specs}
  */
  readonly resourceSpecs?: AppsSettingsCustomTemplateManifestResourceSpecs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#version AppsSettingsCustomTemplate#version}
  */
  readonly version: number;
}

export function appsSettingsCustomTemplateManifestToTerraform(struct?: AppsSettingsCustomTemplateManifest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    resource_specs: cdktf.listMapper(appsSettingsCustomTemplateManifestResourceSpecsToTerraform, false)(struct!.resourceSpecs),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function appsSettingsCustomTemplateManifestToHclTerraform(struct?: AppsSettingsCustomTemplateManifest | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(appsSettingsCustomTemplateManifestResourceSpecsToHclTerraform, false)(struct!.resourceSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "AppsSettingsCustomTemplateManifestResourceSpecsList",
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

export class AppsSettingsCustomTemplateManifestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsSettingsCustomTemplateManifest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AppsSettingsCustomTemplateManifest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._resourceSpecs.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._resourceSpecs.internalValue = value.resourceSpecs;
      this._version = value.version;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // resource_specs - computed: false, optional: true, required: false
  private _resourceSpecs = new AppsSettingsCustomTemplateManifestResourceSpecsList(this, "resource_specs", false);
  public get resourceSpecs() {
    return this._resourceSpecs;
  }
  public putResourceSpecs(value: AppsSettingsCustomTemplateManifestResourceSpecs[] | cdktf.IResolvable) {
    this._resourceSpecs.internalValue = value;
  }
  public resetResourceSpecs() {
    this._resourceSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecsInput() {
    return this._resourceSpecs.internalValue;
  }

  // version - computed: false, optional: false, required: true
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template databricks_apps_settings_custom_template}
*/
export class AppsSettingsCustomTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_apps_settings_custom_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsSettingsCustomTemplate to import
  * @param importFromId The id of the existing AppsSettingsCustomTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsSettingsCustomTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_apps_settings_custom_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/apps_settings_custom_template databricks_apps_settings_custom_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsSettingsCustomTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: AppsSettingsCustomTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_apps_settings_custom_template',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.88.0',
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
    this._description = config.description;
    this._gitProvider = config.gitProvider;
    this._gitRepo = config.gitRepo;
    this._manifest.internalValue = config.manifest;
    this._name = config.name;
    this._path = config.path;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // description - computed: false, optional: true, required: false
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

  // git_provider - computed: false, optional: false, required: true
  private _gitProvider?: string; 
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }
  public set gitProvider(value: string) {
    this._gitProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderInput() {
    return this._gitProvider;
  }

  // git_repo - computed: false, optional: false, required: true
  private _gitRepo?: string; 
  public get gitRepo() {
    return this.getStringAttribute('git_repo');
  }
  public set gitRepo(value: string) {
    this._gitRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo;
  }

  // manifest - computed: false, optional: false, required: true
  private _manifest = new AppsSettingsCustomTemplateManifestOutputReference(this, "manifest");
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: AppsSettingsCustomTemplateManifest) {
    this._manifest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest.internalValue;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
      description: cdktf.stringToTerraform(this._description),
      git_provider: cdktf.stringToTerraform(this._gitProvider),
      git_repo: cdktf.stringToTerraform(this._gitRepo),
      manifest: appsSettingsCustomTemplateManifestToTerraform(this._manifest.internalValue),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_provider: {
        value: cdktf.stringToHclTerraform(this._gitProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_repo: {
        value: cdktf.stringToHclTerraform(this._gitRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest: {
        value: appsSettingsCustomTemplateManifestToHclTerraform(this._manifest.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsSettingsCustomTemplateManifest",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
