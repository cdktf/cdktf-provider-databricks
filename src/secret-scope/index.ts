// https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope#backend_type SecretScope#backend_type}
  */
  readonly backendType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope#id SecretScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope#initial_manage_principal SecretScope#initial_manage_principal}
  */
  readonly initialManagePrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope#name SecretScope#name}
  */
  readonly name: string;
  /**
  * keyvault_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope#keyvault_metadata SecretScope#keyvault_metadata}
  */
  readonly keyvaultMetadata?: SecretScopeKeyvaultMetadata;
}
export interface SecretScopeKeyvaultMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope#dns_name SecretScope#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope#resource_id SecretScope#resource_id}
  */
  readonly resourceId: string;
}

export function secretScopeKeyvaultMetadataToTerraform(struct?: SecretScopeKeyvaultMetadataOutputReference | SecretScopeKeyvaultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}

export class SecretScopeKeyvaultMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretScopeKeyvaultMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretScopeKeyvaultMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._resourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._resourceId = value.resourceId;
    }
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope databricks_secret_scope}
*/
export class SecretScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_secret_scope";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/secret_scope databricks_secret_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretScopeConfig
  */
  public constructor(scope: Construct, id: string, config: SecretScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_secret_scope',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.24.0',
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
    this._backendType = config.backendType;
    this._id = config.id;
    this._initialManagePrincipal = config.initialManagePrincipal;
    this._name = config.name;
    this._keyvaultMetadata.internalValue = config.keyvaultMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_type - computed: true, optional: true, required: false
  private _backendType?: string; 
  public get backendType() {
    return this.getStringAttribute('backend_type');
  }
  public set backendType(value: string) {
    this._backendType = value;
  }
  public resetBackendType() {
    this._backendType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendTypeInput() {
    return this._backendType;
  }

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

  // initial_manage_principal - computed: false, optional: true, required: false
  private _initialManagePrincipal?: string; 
  public get initialManagePrincipal() {
    return this.getStringAttribute('initial_manage_principal');
  }
  public set initialManagePrincipal(value: string) {
    this._initialManagePrincipal = value;
  }
  public resetInitialManagePrincipal() {
    this._initialManagePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialManagePrincipalInput() {
    return this._initialManagePrincipal;
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

  // keyvault_metadata - computed: false, optional: true, required: false
  private _keyvaultMetadata = new SecretScopeKeyvaultMetadataOutputReference(this, "keyvault_metadata");
  public get keyvaultMetadata() {
    return this._keyvaultMetadata;
  }
  public putKeyvaultMetadata(value: SecretScopeKeyvaultMetadata) {
    this._keyvaultMetadata.internalValue = value;
  }
  public resetKeyvaultMetadata() {
    this._keyvaultMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyvaultMetadataInput() {
    return this._keyvaultMetadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_type: cdktf.stringToTerraform(this._backendType),
      id: cdktf.stringToTerraform(this._id),
      initial_manage_principal: cdktf.stringToTerraform(this._initialManagePrincipal),
      name: cdktf.stringToTerraform(this._name),
      keyvault_metadata: secretScopeKeyvaultMetadataToTerraform(this._keyvaultMetadata.internalValue),
    };
  }
}
