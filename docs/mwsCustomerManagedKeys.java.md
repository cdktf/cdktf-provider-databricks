# `databricks_mws_customer_managed_keys`

Refer to the Terraform Registory for docs: [`databricks_mws_customer_managed_keys`](https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys).

# `mwsCustomerManagedKeys` Submodule <a name="`mwsCustomerManagedKeys` Submodule" id="@cdktf/provider-databricks.mwsCustomerManagedKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsCustomerManagedKeys <a name="MwsCustomerManagedKeys" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys databricks_mws_customer_managed_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeys;

MwsCustomerManagedKeys.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .useCases(java.util.List<java.lang.String>)
//  .awsKeyInfo(MwsCustomerManagedKeysAwsKeyInfo)
//  .creationTime(java.lang.Number)
//  .customerManagedKeyId(java.lang.String)
//  .gcpKeyInfo(MwsCustomerManagedKeysGcpKeyInfo)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.useCases">useCases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.awsKeyInfo">awsKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | aws_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.customerManagedKeyId">customerManagedKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.gcpKeyInfo">gcpKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a></code> | gcp_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}.

---

##### `useCases`<sup>Required</sup> <a name="useCases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.useCases"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}.

---

##### `awsKeyInfo`<sup>Optional</sup> <a name="awsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.awsKeyInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

aws_key_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#aws_key_info MwsCustomerManagedKeys#aws_key_info}

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.creationTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}.

---

##### `customerManagedKeyId`<sup>Optional</sup> <a name="customerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.customerManagedKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}.

---

##### `gcpKeyInfo`<sup>Optional</sup> <a name="gcpKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.gcpKeyInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a>

gcp_key_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#gcp_key_info MwsCustomerManagedKeys#gcp_key_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo">putAwsKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putGcpKeyInfo">putGcpKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetAwsKeyInfo">resetAwsKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCustomerManagedKeyId">resetCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetGcpKeyInfo">resetGcpKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAwsKeyInfo` <a name="putAwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo"></a>

```java
public void putAwsKeyInfo(MwsCustomerManagedKeysAwsKeyInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---

##### `putGcpKeyInfo` <a name="putGcpKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putGcpKeyInfo"></a>

```java
public void putGcpKeyInfo(MwsCustomerManagedKeysGcpKeyInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putGcpKeyInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a>

---

##### `resetAwsKeyInfo` <a name="resetAwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetAwsKeyInfo"></a>

```java
public void resetAwsKeyInfo()
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCreationTime"></a>

```java
public void resetCreationTime()
```

##### `resetCustomerManagedKeyId` <a name="resetCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCustomerManagedKeyId"></a>

```java
public void resetCustomerManagedKeyId()
```

##### `resetGcpKeyInfo` <a name="resetGcpKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetGcpKeyInfo"></a>

```java
public void resetGcpKeyInfo()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsCustomerManagedKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeys;

MwsCustomerManagedKeys.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeys;

MwsCustomerManagedKeys.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeys;

MwsCustomerManagedKeys.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeys;

MwsCustomerManagedKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MwsCustomerManagedKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MwsCustomerManagedKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MwsCustomerManagedKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MwsCustomerManagedKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MwsCustomerManagedKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfo">awsKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference">MwsCustomerManagedKeysAwsKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.gcpKeyInfo">gcpKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference">MwsCustomerManagedKeysGcpKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfoInput">awsKeyInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTimeInput">creationTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyIdInput">customerManagedKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.gcpKeyInfoInput">gcpKeyInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCasesInput">useCasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCases">useCases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsKeyInfo`<sup>Required</sup> <a name="awsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfo"></a>

```java
public MwsCustomerManagedKeysAwsKeyInfoOutputReference getAwsKeyInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference">MwsCustomerManagedKeysAwsKeyInfoOutputReference</a>

---

##### `gcpKeyInfo`<sup>Required</sup> <a name="gcpKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.gcpKeyInfo"></a>

```java
public MwsCustomerManagedKeysGcpKeyInfoOutputReference getGcpKeyInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference">MwsCustomerManagedKeysGcpKeyInfoOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `awsKeyInfoInput`<sup>Optional</sup> <a name="awsKeyInfoInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfoInput"></a>

```java
public MwsCustomerManagedKeysAwsKeyInfo getAwsKeyInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTimeInput"></a>

```java
public java.lang.Number getCreationTimeInput();
```

- *Type:* java.lang.Number

---

##### `customerManagedKeyIdInput`<sup>Optional</sup> <a name="customerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyIdInput"></a>

```java
public java.lang.String getCustomerManagedKeyIdInput();
```

- *Type:* java.lang.String

---

##### `gcpKeyInfoInput`<sup>Optional</sup> <a name="gcpKeyInfoInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.gcpKeyInfoInput"></a>

```java
public MwsCustomerManagedKeysGcpKeyInfo getGcpKeyInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `useCasesInput`<sup>Optional</sup> <a name="useCasesInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCasesInput"></a>

```java
public java.util.List<java.lang.String> getUseCasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `customerManagedKeyId`<sup>Required</sup> <a name="customerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyId"></a>

```java
public java.lang.String getCustomerManagedKeyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `useCases`<sup>Required</sup> <a name="useCases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCases"></a>

```java
public java.util.List<java.lang.String> getUseCases();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MwsCustomerManagedKeysAwsKeyInfo <a name="MwsCustomerManagedKeysAwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeysAwsKeyInfo;

MwsCustomerManagedKeysAwsKeyInfo.builder()
    .keyArn(java.lang.String)
//  .keyAlias(java.lang.String)
//  .keyRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyAlias">keyAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyRegion">keyRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}. |

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}.

---

##### `keyAlias`<sup>Optional</sup> <a name="keyAlias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyAlias"></a>

```java
public java.lang.String getKeyAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}.

---

##### `keyRegion`<sup>Optional</sup> <a name="keyRegion" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyRegion"></a>

```java
public java.lang.String getKeyRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}.

---

### MwsCustomerManagedKeysConfig <a name="MwsCustomerManagedKeysConfig" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeysConfig;

MwsCustomerManagedKeysConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .useCases(java.util.List<java.lang.String>)
//  .awsKeyInfo(MwsCustomerManagedKeysAwsKeyInfo)
//  .creationTime(java.lang.Number)
//  .customerManagedKeyId(java.lang.String)
//  .gcpKeyInfo(MwsCustomerManagedKeysGcpKeyInfo)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.useCases">useCases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.awsKeyInfo">awsKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | aws_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.gcpKeyInfo">gcpKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a></code> | gcp_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}.

---

##### `useCases`<sup>Required</sup> <a name="useCases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.useCases"></a>

```java
public java.util.List<java.lang.String> getUseCases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}.

---

##### `awsKeyInfo`<sup>Optional</sup> <a name="awsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.awsKeyInfo"></a>

```java
public MwsCustomerManagedKeysAwsKeyInfo getAwsKeyInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

aws_key_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#aws_key_info MwsCustomerManagedKeys#aws_key_info}

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}.

---

##### `customerManagedKeyId`<sup>Optional</sup> <a name="customerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.customerManagedKeyId"></a>

```java
public java.lang.String getCustomerManagedKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}.

---

##### `gcpKeyInfo`<sup>Optional</sup> <a name="gcpKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.gcpKeyInfo"></a>

```java
public MwsCustomerManagedKeysGcpKeyInfo getGcpKeyInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a>

gcp_key_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#gcp_key_info MwsCustomerManagedKeys#gcp_key_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MwsCustomerManagedKeysGcpKeyInfo <a name="MwsCustomerManagedKeysGcpKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeysGcpKeyInfo;

MwsCustomerManagedKeysGcpKeyInfo.builder()
    .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#kms_key_id MwsCustomerManagedKeys#kms_key_id}. |

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_customer_managed_keys#kms_key_id MwsCustomerManagedKeys#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsCustomerManagedKeysAwsKeyInfoOutputReference <a name="MwsCustomerManagedKeysAwsKeyInfoOutputReference" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeysAwsKeyInfoOutputReference;

new MwsCustomerManagedKeysAwsKeyInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyAlias">resetKeyAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyRegion">resetKeyRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyAlias` <a name="resetKeyAlias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyAlias"></a>

```java
public void resetKeyAlias()
```

##### `resetKeyRegion` <a name="resetKeyRegion" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyRegion"></a>

```java
public void resetKeyRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAliasInput">keyAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegionInput">keyRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAlias">keyAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegion">keyRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyAliasInput`<sup>Optional</sup> <a name="keyAliasInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAliasInput"></a>

```java
public java.lang.String getKeyAliasInput();
```

- *Type:* java.lang.String

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArnInput"></a>

```java
public java.lang.String getKeyArnInput();
```

- *Type:* java.lang.String

---

##### `keyRegionInput`<sup>Optional</sup> <a name="keyRegionInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegionInput"></a>

```java
public java.lang.String getKeyRegionInput();
```

- *Type:* java.lang.String

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAlias"></a>

```java
public java.lang.String getKeyAlias();
```

- *Type:* java.lang.String

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

---

##### `keyRegion`<sup>Required</sup> <a name="keyRegion" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegion"></a>

```java
public java.lang.String getKeyRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.internalValue"></a>

```java
public MwsCustomerManagedKeysAwsKeyInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---


### MwsCustomerManagedKeysGcpKeyInfoOutputReference <a name="MwsCustomerManagedKeysGcpKeyInfoOutputReference" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_customer_managed_keys.MwsCustomerManagedKeysGcpKeyInfoOutputReference;

new MwsCustomerManagedKeysGcpKeyInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.internalValue"></a>

```java
public MwsCustomerManagedKeysGcpKeyInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a>

---



