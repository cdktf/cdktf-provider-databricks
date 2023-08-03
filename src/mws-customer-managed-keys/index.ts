// https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsCustomerManagedKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}
  */
  readonly customerManagedKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}
  */
  readonly useCases: string[];
  /**
  * aws_key_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#aws_key_info MwsCustomerManagedKeys#aws_key_info}
  */
  readonly awsKeyInfo?: MwsCustomerManagedKeysAwsKeyInfo;
  /**
  * gcp_key_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#gcp_key_info MwsCustomerManagedKeys#gcp_key_info}
  */
  readonly gcpKeyInfo?: MwsCustomerManagedKeysGcpKeyInfo;
}
export interface MwsCustomerManagedKeysAwsKeyInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}
  */
  readonly keyAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}
  */
  readonly keyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}
  */
  readonly keyRegion?: string;
}

export function mwsCustomerManagedKeysAwsKeyInfoToTerraform(struct?: MwsCustomerManagedKeysAwsKeyInfoOutputReference | MwsCustomerManagedKeysAwsKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_alias: cdktf.stringToTerraform(struct!.keyAlias),
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_region: cdktf.stringToTerraform(struct!.keyRegion),
  }
}

export class MwsCustomerManagedKeysAwsKeyInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsCustomerManagedKeysAwsKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAlias = this._keyAlias;
    }
    if (this._keyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArn = this._keyArn;
    }
    if (this._keyRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRegion = this._keyRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsCustomerManagedKeysAwsKeyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyAlias = undefined;
      this._keyArn = undefined;
      this._keyRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyAlias = value.keyAlias;
      this._keyArn = value.keyArn;
      this._keyRegion = value.keyRegion;
    }
  }

  // key_alias - computed: false, optional: false, required: true
  private _keyAlias?: string; 
  public get keyAlias() {
    return this.getStringAttribute('key_alias');
  }
  public set keyAlias(value: string) {
    this._keyAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAliasInput() {
    return this._keyAlias;
  }

  // key_arn - computed: false, optional: false, required: true
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn;
  }

  // key_region - computed: true, optional: true, required: false
  private _keyRegion?: string; 
  public get keyRegion() {
    return this.getStringAttribute('key_region');
  }
  public set keyRegion(value: string) {
    this._keyRegion = value;
  }
  public resetKeyRegion() {
    this._keyRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRegionInput() {
    return this._keyRegion;
  }
}
export interface MwsCustomerManagedKeysGcpKeyInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys#kms_key_id MwsCustomerManagedKeys#kms_key_id}
  */
  readonly kmsKeyId: string;
}

export function mwsCustomerManagedKeysGcpKeyInfoToTerraform(struct?: MwsCustomerManagedKeysGcpKeyInfoOutputReference | MwsCustomerManagedKeysGcpKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export class MwsCustomerManagedKeysGcpKeyInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsCustomerManagedKeysGcpKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsCustomerManagedKeysGcpKeyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys databricks_mws_customer_managed_keys}
*/
export class MwsCustomerManagedKeys extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_customer_managed_keys";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/mws_customer_managed_keys databricks_mws_customer_managed_keys} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsCustomerManagedKeysConfig
  */
  public constructor(scope: Construct, id: string, config: MwsCustomerManagedKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_customer_managed_keys',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.22.0',
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
    this._accountId = config.accountId;
    this._creationTime = config.creationTime;
    this._customerManagedKeyId = config.customerManagedKeyId;
    this._id = config.id;
    this._useCases = config.useCases;
    this._awsKeyInfo.internalValue = config.awsKeyInfo;
    this._gcpKeyInfo.internalValue = config.gcpKeyInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: number; 
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }
  public set creationTime(value: number) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // customer_managed_key_id - computed: true, optional: true, required: false
  private _customerManagedKeyId?: string; 
  public get customerManagedKeyId() {
    return this.getStringAttribute('customer_managed_key_id');
  }
  public set customerManagedKeyId(value: string) {
    this._customerManagedKeyId = value;
  }
  public resetCustomerManagedKeyId() {
    this._customerManagedKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyIdInput() {
    return this._customerManagedKeyId;
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

  // use_cases - computed: false, optional: false, required: true
  private _useCases?: string[]; 
  public get useCases() {
    return this.getListAttribute('use_cases');
  }
  public set useCases(value: string[]) {
    this._useCases = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useCasesInput() {
    return this._useCases;
  }

  // aws_key_info - computed: false, optional: true, required: false
  private _awsKeyInfo = new MwsCustomerManagedKeysAwsKeyInfoOutputReference(this, "aws_key_info");
  public get awsKeyInfo() {
    return this._awsKeyInfo;
  }
  public putAwsKeyInfo(value: MwsCustomerManagedKeysAwsKeyInfo) {
    this._awsKeyInfo.internalValue = value;
  }
  public resetAwsKeyInfo() {
    this._awsKeyInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKeyInfoInput() {
    return this._awsKeyInfo.internalValue;
  }

  // gcp_key_info - computed: false, optional: true, required: false
  private _gcpKeyInfo = new MwsCustomerManagedKeysGcpKeyInfoOutputReference(this, "gcp_key_info");
  public get gcpKeyInfo() {
    return this._gcpKeyInfo;
  }
  public putGcpKeyInfo(value: MwsCustomerManagedKeysGcpKeyInfo) {
    this._gcpKeyInfo.internalValue = value;
  }
  public resetGcpKeyInfo() {
    this._gcpKeyInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpKeyInfoInput() {
    return this._gcpKeyInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      creation_time: cdktf.numberToTerraform(this._creationTime),
      customer_managed_key_id: cdktf.stringToTerraform(this._customerManagedKeyId),
      id: cdktf.stringToTerraform(this._id),
      use_cases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._useCases),
      aws_key_info: mwsCustomerManagedKeysAwsKeyInfoToTerraform(this._awsKeyInfo.internalValue),
      gcp_key_info: mwsCustomerManagedKeysGcpKeyInfoToTerraform(this._gcpKeyInfo.internalValue),
    };
  }
}
