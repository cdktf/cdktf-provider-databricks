# `dataDatabricksAwsUnityCatalogPolicy` Submodule <a name="`dataDatabricksAwsUnityCatalogPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsUnityCatalogPolicy <a name="DataDatabricksAwsUnityCatalogPolicy" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy databricks_aws_unity_catalog_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_unity_catalog_policy.DataDatabricksAwsUnityCatalogPolicy;

DataDatabricksAwsUnityCatalogPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .awsAccountId(java.lang.String)
    .bucketName(java.lang.String)
    .roleName(java.lang.String)
//  .awsPartition(java.lang.String)
//  .id(java.lang.String)
//  .kmsName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#aws_account_id DataDatabricksAwsUnityCatalogPolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#bucket_name DataDatabricksAwsUnityCatalogPolicy#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#role_name DataDatabricksAwsUnityCatalogPolicy#role_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.awsPartition">awsPartition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#aws_partition DataDatabricksAwsUnityCatalogPolicy#aws_partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#id DataDatabricksAwsUnityCatalogPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.kmsName">kmsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#kms_name DataDatabricksAwsUnityCatalogPolicy#kms_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#aws_account_id DataDatabricksAwsUnityCatalogPolicy#aws_account_id}.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#bucket_name DataDatabricksAwsUnityCatalogPolicy#bucket_name}.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#role_name DataDatabricksAwsUnityCatalogPolicy#role_name}.

---

##### `awsPartition`<sup>Optional</sup> <a name="awsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.awsPartition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#aws_partition DataDatabricksAwsUnityCatalogPolicy#aws_partition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#id DataDatabricksAwsUnityCatalogPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsName`<sup>Optional</sup> <a name="kmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.kmsName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#kms_name DataDatabricksAwsUnityCatalogPolicy#kms_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetAwsPartition">resetAwsPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetKmsName">resetKmsName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAwsPartition` <a name="resetAwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetAwsPartition"></a>

```java
public void resetAwsPartition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetKmsName` <a name="resetKmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetKmsName"></a>

```java
public void resetKmsName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_unity_catalog_policy.DataDatabricksAwsUnityCatalogPolicy;

DataDatabricksAwsUnityCatalogPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_unity_catalog_policy.DataDatabricksAwsUnityCatalogPolicy;

DataDatabricksAwsUnityCatalogPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_unity_catalog_policy.DataDatabricksAwsUnityCatalogPolicy;

DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_unity_catalog_policy.DataDatabricksAwsUnityCatalogPolicy;

DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAwsUnityCatalogPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAwsUnityCatalogPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsUnityCatalogPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsPartitionInput">awsPartitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsNameInput">kmsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsPartition">awsPartition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsName">kmsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `awsPartitionInput`<sup>Optional</sup> <a name="awsPartitionInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsPartitionInput"></a>

```java
public java.lang.String getAwsPartitionInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsNameInput`<sup>Optional</sup> <a name="kmsNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsNameInput"></a>

```java
public java.lang.String getKmsNameInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `awsPartition`<sup>Required</sup> <a name="awsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsPartition"></a>

```java
public java.lang.String getAwsPartition();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsName`<sup>Required</sup> <a name="kmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsName"></a>

```java
public java.lang.String getKmsName();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsUnityCatalogPolicyConfig <a name="DataDatabricksAwsUnityCatalogPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_aws_unity_catalog_policy.DataDatabricksAwsUnityCatalogPolicyConfig;

DataDatabricksAwsUnityCatalogPolicyConfig.builder()
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
    .awsAccountId(java.lang.String)
    .bucketName(java.lang.String)
    .roleName(java.lang.String)
//  .awsPartition(java.lang.String)
//  .id(java.lang.String)
//  .kmsName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#aws_account_id DataDatabricksAwsUnityCatalogPolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#bucket_name DataDatabricksAwsUnityCatalogPolicy#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#role_name DataDatabricksAwsUnityCatalogPolicy#role_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsPartition">awsPartition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#aws_partition DataDatabricksAwsUnityCatalogPolicy#aws_partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#id DataDatabricksAwsUnityCatalogPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.kmsName">kmsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#kms_name DataDatabricksAwsUnityCatalogPolicy#kms_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#aws_account_id DataDatabricksAwsUnityCatalogPolicy#aws_account_id}.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#bucket_name DataDatabricksAwsUnityCatalogPolicy#bucket_name}.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#role_name DataDatabricksAwsUnityCatalogPolicy#role_name}.

---

##### `awsPartition`<sup>Optional</sup> <a name="awsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsPartition"></a>

```java
public java.lang.String getAwsPartition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#aws_partition DataDatabricksAwsUnityCatalogPolicy#aws_partition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#id DataDatabricksAwsUnityCatalogPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsName`<sup>Optional</sup> <a name="kmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.kmsName"></a>

```java
public java.lang.String getKmsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_policy#kms_name DataDatabricksAwsUnityCatalogPolicy#kms_name}.

---



