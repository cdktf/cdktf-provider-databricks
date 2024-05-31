# `dataDatabricksAwsAssumeRolePolicy` Submodule <a name="`dataDatabricksAwsAssumeRolePolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsAssumeRolePolicy <a name="DataDatabricksAwsAssumeRolePolicy" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy databricks_aws_assume_role_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_assume_role_policy.DataDatabricksAwsAssumeRolePolicy;

DataDatabricksAwsAssumeRolePolicy.Builder.create(Construct scope, java.lang.String id)
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
    .externalId(java.lang.String)
//  .databricksAccountId(java.lang.String)
//  .forLogDelivery(java.lang.Boolean)
//  .forLogDelivery(IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#external_id DataDatabricksAwsAssumeRolePolicy#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.databricksAccountId">databricksAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#databricks_account_id DataDatabricksAwsAssumeRolePolicy#databricks_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.forLogDelivery">forLogDelivery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant AssumeRole to Databricks SaasUsageDeliveryRole instead of root account. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#id DataDatabricksAwsAssumeRolePolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#external_id DataDatabricksAwsAssumeRolePolicy#external_id}.

---

##### `databricksAccountId`<sup>Optional</sup> <a name="databricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.databricksAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#databricks_account_id DataDatabricksAwsAssumeRolePolicy#databricks_account_id}.

---

##### `forLogDelivery`<sup>Optional</sup> <a name="forLogDelivery" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.forLogDelivery"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant AssumeRole to Databricks SaasUsageDeliveryRole instead of root account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#for_log_delivery DataDatabricksAwsAssumeRolePolicy#for_log_delivery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#id DataDatabricksAwsAssumeRolePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetDatabricksAccountId">resetDatabricksAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetForLogDelivery">resetForLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDatabricksAccountId` <a name="resetDatabricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetDatabricksAccountId"></a>

```java
public void resetDatabricksAccountId()
```

##### `resetForLogDelivery` <a name="resetForLogDelivery" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetForLogDelivery"></a>

```java
public void resetForLogDelivery()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsAssumeRolePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_assume_role_policy.DataDatabricksAwsAssumeRolePolicy;

DataDatabricksAwsAssumeRolePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_assume_role_policy.DataDatabricksAwsAssumeRolePolicy;

DataDatabricksAwsAssumeRolePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_assume_role_policy.DataDatabricksAwsAssumeRolePolicy;

DataDatabricksAwsAssumeRolePolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_assume_role_policy.DataDatabricksAwsAssumeRolePolicy;

DataDatabricksAwsAssumeRolePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAwsAssumeRolePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksAwsAssumeRolePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAwsAssumeRolePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAwsAssumeRolePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsAssumeRolePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.databricksAccountIdInput">databricksAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forLogDeliveryInput">forLogDeliveryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.databricksAccountId">databricksAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forLogDelivery">forLogDelivery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `databricksAccountIdInput`<sup>Optional</sup> <a name="databricksAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.databricksAccountIdInput"></a>

```java
public java.lang.String getDatabricksAccountIdInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `forLogDeliveryInput`<sup>Optional</sup> <a name="forLogDeliveryInput" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forLogDeliveryInput"></a>

```java
public java.lang.Object getForLogDeliveryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `databricksAccountId`<sup>Required</sup> <a name="databricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.databricksAccountId"></a>

```java
public java.lang.String getDatabricksAccountId();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `forLogDelivery`<sup>Required</sup> <a name="forLogDelivery" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forLogDelivery"></a>

```java
public java.lang.Object getForLogDelivery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsAssumeRolePolicyConfig <a name="DataDatabricksAwsAssumeRolePolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_assume_role_policy.DataDatabricksAwsAssumeRolePolicyConfig;

DataDatabricksAwsAssumeRolePolicyConfig.builder()
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
    .externalId(java.lang.String)
//  .databricksAccountId(java.lang.String)
//  .forLogDelivery(java.lang.Boolean)
//  .forLogDelivery(IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#external_id DataDatabricksAwsAssumeRolePolicy#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.databricksAccountId">databricksAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#databricks_account_id DataDatabricksAwsAssumeRolePolicy#databricks_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.forLogDelivery">forLogDelivery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant AssumeRole to Databricks SaasUsageDeliveryRole instead of root account. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#id DataDatabricksAwsAssumeRolePolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#external_id DataDatabricksAwsAssumeRolePolicy#external_id}.

---

##### `databricksAccountId`<sup>Optional</sup> <a name="databricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.databricksAccountId"></a>

```java
public java.lang.String getDatabricksAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#databricks_account_id DataDatabricksAwsAssumeRolePolicy#databricks_account_id}.

---

##### `forLogDelivery`<sup>Optional</sup> <a name="forLogDelivery" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.forLogDelivery"></a>

```java
public java.lang.Object getForLogDelivery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant AssumeRole to Databricks SaasUsageDeliveryRole instead of root account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#for_log_delivery DataDatabricksAwsAssumeRolePolicy#for_log_delivery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/aws_assume_role_policy#id DataDatabricksAwsAssumeRolePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



