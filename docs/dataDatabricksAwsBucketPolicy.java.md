# `dataDatabricksAwsBucketPolicy` Submodule <a name="`dataDatabricksAwsBucketPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsBucketPolicy <a name="DataDatabricksAwsBucketPolicy" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy databricks_aws_bucket_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_bucket_policy.DataDatabricksAwsBucketPolicy;

DataDatabricksAwsBucketPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
//  .databricksAccountId(java.lang.String)
//  .databricksE2AccountId(java.lang.String)
//  .fullAccessRole(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.databricksAccountId">databricksAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.databricksE2AccountId">databricksE2AccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.fullAccessRole">fullAccessRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}.

---

##### `databricksAccountId`<sup>Optional</sup> <a name="databricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.databricksAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}.

---

##### `databricksE2AccountId`<sup>Optional</sup> <a name="databricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.databricksE2AccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}.

---

##### `fullAccessRole`<sup>Optional</sup> <a name="fullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.fullAccessRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksAccountId">resetDatabricksAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksE2AccountId">resetDatabricksE2AccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetFullAccessRole">resetFullAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDatabricksAccountId` <a name="resetDatabricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksAccountId"></a>

```java
public void resetDatabricksAccountId()
```

##### `resetDatabricksE2AccountId` <a name="resetDatabricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksE2AccountId"></a>

```java
public void resetDatabricksE2AccountId()
```

##### `resetFullAccessRole` <a name="resetFullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetFullAccessRole"></a>

```java
public void resetFullAccessRole()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsBucketPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_bucket_policy.DataDatabricksAwsBucketPolicy;

DataDatabricksAwsBucketPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_bucket_policy.DataDatabricksAwsBucketPolicy;

DataDatabricksAwsBucketPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_bucket_policy.DataDatabricksAwsBucketPolicy;

DataDatabricksAwsBucketPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_bucket_policy.DataDatabricksAwsBucketPolicy;

DataDatabricksAwsBucketPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAwsBucketPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksAwsBucketPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAwsBucketPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAwsBucketPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsBucketPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountIdInput">databricksAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountIdInput">databricksE2AccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRoleInput">fullAccessRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountId">databricksAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountId">databricksE2AccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRole">fullAccessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `databricksAccountIdInput`<sup>Optional</sup> <a name="databricksAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountIdInput"></a>

```java
public java.lang.String getDatabricksAccountIdInput();
```

- *Type:* java.lang.String

---

##### `databricksE2AccountIdInput`<sup>Optional</sup> <a name="databricksE2AccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountIdInput"></a>

```java
public java.lang.String getDatabricksE2AccountIdInput();
```

- *Type:* java.lang.String

---

##### `fullAccessRoleInput`<sup>Optional</sup> <a name="fullAccessRoleInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRoleInput"></a>

```java
public java.lang.String getFullAccessRoleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `databricksAccountId`<sup>Required</sup> <a name="databricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountId"></a>

```java
public java.lang.String getDatabricksAccountId();
```

- *Type:* java.lang.String

---

##### `databricksE2AccountId`<sup>Required</sup> <a name="databricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountId"></a>

```java
public java.lang.String getDatabricksE2AccountId();
```

- *Type:* java.lang.String

---

##### `fullAccessRole`<sup>Required</sup> <a name="fullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRole"></a>

```java
public java.lang.String getFullAccessRole();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsBucketPolicyConfig <a name="DataDatabricksAwsBucketPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_bucket_policy.DataDatabricksAwsBucketPolicyConfig;

DataDatabricksAwsBucketPolicyConfig.builder()
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
    .bucket(java.lang.String)
//  .databricksAccountId(java.lang.String)
//  .databricksE2AccountId(java.lang.String)
//  .fullAccessRole(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksAccountId">databricksAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksE2AccountId">databricksE2AccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.fullAccessRole">fullAccessRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}.

---

##### `databricksAccountId`<sup>Optional</sup> <a name="databricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksAccountId"></a>

```java
public java.lang.String getDatabricksAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}.

---

##### `databricksE2AccountId`<sup>Optional</sup> <a name="databricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksE2AccountId"></a>

```java
public java.lang.String getDatabricksE2AccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}.

---

##### `fullAccessRole`<sup>Optional</sup> <a name="fullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.fullAccessRole"></a>

```java
public java.lang.String getFullAccessRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



