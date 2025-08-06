# `dataDatabricksSparkVersion` Submodule <a name="`dataDatabricksSparkVersion` Submodule" id="@cdktf/provider-databricks.dataDatabricksSparkVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSparkVersion <a name="DataDatabricksSparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version databricks_spark_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_spark_version.DataDatabricksSparkVersion;

DataDatabricksSparkVersion.Builder.create(Construct scope, java.lang.String id)
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
//  .beta(java.lang.Boolean)
//  .beta(IResolvable)
//  .genomics(java.lang.Boolean)
//  .genomics(IResolvable)
//  .gpu(java.lang.Boolean)
//  .gpu(IResolvable)
//  .graviton(java.lang.Boolean)
//  .graviton(IResolvable)
//  .id(java.lang.String)
//  .latest(java.lang.Boolean)
//  .latest(IResolvable)
//  .longTermSupport(java.lang.Boolean)
//  .longTermSupport(IResolvable)
//  .ml(java.lang.Boolean)
//  .ml(IResolvable)
//  .photon(java.lang.Boolean)
//  .photon(IResolvable)
//  .scala(java.lang.String)
//  .sparkVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.beta">beta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.genomics">genomics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.gpu">gpu</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.graviton">graviton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.latest">latest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.longTermSupport">longTermSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.ml">ml</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.photon">photon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scala">scala</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.beta"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}.

---

##### `genomics`<sup>Optional</sup> <a name="genomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.genomics"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.gpu"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}.

---

##### `graviton`<sup>Optional</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.graviton"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latest`<sup>Optional</sup> <a name="latest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.latest"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}.

---

##### `longTermSupport`<sup>Optional</sup> <a name="longTermSupport" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.longTermSupport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}.

---

##### `ml`<sup>Optional</sup> <a name="ml" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.ml"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}.

---

##### `photon`<sup>Optional</sup> <a name="photon" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.photon"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}.

---

##### `scala`<sup>Optional</sup> <a name="scala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scala"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}.

---

##### `sparkVersion`<sup>Optional</sup> <a name="sparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.sparkVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetBeta">resetBeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGenomics">resetGenomics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGpu">resetGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGraviton">resetGraviton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLatest">resetLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLongTermSupport">resetLongTermSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetMl">resetMl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetPhoton">resetPhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetScala">resetScala</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetSparkVersion">resetSparkVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBeta` <a name="resetBeta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetBeta"></a>

```java
public void resetBeta()
```

##### `resetGenomics` <a name="resetGenomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGenomics"></a>

```java
public void resetGenomics()
```

##### `resetGpu` <a name="resetGpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGpu"></a>

```java
public void resetGpu()
```

##### `resetGraviton` <a name="resetGraviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGraviton"></a>

```java
public void resetGraviton()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetId"></a>

```java
public void resetId()
```

##### `resetLatest` <a name="resetLatest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLatest"></a>

```java
public void resetLatest()
```

##### `resetLongTermSupport` <a name="resetLongTermSupport" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLongTermSupport"></a>

```java
public void resetLongTermSupport()
```

##### `resetMl` <a name="resetMl" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetMl"></a>

```java
public void resetMl()
```

##### `resetPhoton` <a name="resetPhoton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetPhoton"></a>

```java
public void resetPhoton()
```

##### `resetScala` <a name="resetScala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetScala"></a>

```java
public void resetScala()
```

##### `resetSparkVersion` <a name="resetSparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetSparkVersion"></a>

```java
public void resetSparkVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSparkVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_spark_version.DataDatabricksSparkVersion;

DataDatabricksSparkVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_spark_version.DataDatabricksSparkVersion;

DataDatabricksSparkVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_spark_version.DataDatabricksSparkVersion;

DataDatabricksSparkVersion.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_spark_version.DataDatabricksSparkVersion;

DataDatabricksSparkVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksSparkVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksSparkVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksSparkVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksSparkVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSparkVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.betaInput">betaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomicsInput">genomicsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpuInput">gpuInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gravitonInput">gravitonInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latestInput">latestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupportInput">longTermSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.mlInput">mlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photonInput">photonInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scalaInput">scalaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersionInput">sparkVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.beta">beta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomics">genomics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpu">gpu</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.graviton">graviton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latest">latest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupport">longTermSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.ml">ml</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photon">photon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scala">scala</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `betaInput`<sup>Optional</sup> <a name="betaInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.betaInput"></a>

```java
public java.lang.Object getBetaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `genomicsInput`<sup>Optional</sup> <a name="genomicsInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomicsInput"></a>

```java
public java.lang.Object getGenomicsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gpuInput`<sup>Optional</sup> <a name="gpuInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpuInput"></a>

```java
public java.lang.Object getGpuInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gravitonInput`<sup>Optional</sup> <a name="gravitonInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gravitonInput"></a>

```java
public java.lang.Object getGravitonInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `latestInput`<sup>Optional</sup> <a name="latestInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latestInput"></a>

```java
public java.lang.Object getLatestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `longTermSupportInput`<sup>Optional</sup> <a name="longTermSupportInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupportInput"></a>

```java
public java.lang.Object getLongTermSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mlInput`<sup>Optional</sup> <a name="mlInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.mlInput"></a>

```java
public java.lang.Object getMlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `photonInput`<sup>Optional</sup> <a name="photonInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photonInput"></a>

```java
public java.lang.Object getPhotonInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scalaInput`<sup>Optional</sup> <a name="scalaInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scalaInput"></a>

```java
public java.lang.String getScalaInput();
```

- *Type:* java.lang.String

---

##### `sparkVersionInput`<sup>Optional</sup> <a name="sparkVersionInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersionInput"></a>

```java
public java.lang.String getSparkVersionInput();
```

- *Type:* java.lang.String

---

##### `beta`<sup>Required</sup> <a name="beta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.beta"></a>

```java
public java.lang.Object getBeta();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `genomics`<sup>Required</sup> <a name="genomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomics"></a>

```java
public java.lang.Object getGenomics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpu"></a>

```java
public java.lang.Object getGpu();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `graviton`<sup>Required</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.graviton"></a>

```java
public java.lang.Object getGraviton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latest"></a>

```java
public java.lang.Object getLatest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `longTermSupport`<sup>Required</sup> <a name="longTermSupport" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupport"></a>

```java
public java.lang.Object getLongTermSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ml`<sup>Required</sup> <a name="ml" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.ml"></a>

```java
public java.lang.Object getMl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `photon`<sup>Required</sup> <a name="photon" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photon"></a>

```java
public java.lang.Object getPhoton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scala`<sup>Required</sup> <a name="scala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scala"></a>

```java
public java.lang.String getScala();
```

- *Type:* java.lang.String

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersion"></a>

```java
public java.lang.String getSparkVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSparkVersionConfig <a name="DataDatabricksSparkVersionConfig" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_spark_version.DataDatabricksSparkVersionConfig;

DataDatabricksSparkVersionConfig.builder()
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
//  .beta(java.lang.Boolean)
//  .beta(IResolvable)
//  .genomics(java.lang.Boolean)
//  .genomics(IResolvable)
//  .gpu(java.lang.Boolean)
//  .gpu(IResolvable)
//  .graviton(java.lang.Boolean)
//  .graviton(IResolvable)
//  .id(java.lang.String)
//  .latest(java.lang.Boolean)
//  .latest(IResolvable)
//  .longTermSupport(java.lang.Boolean)
//  .longTermSupport(IResolvable)
//  .ml(java.lang.Boolean)
//  .ml(IResolvable)
//  .photon(java.lang.Boolean)
//  .photon(IResolvable)
//  .scala(java.lang.String)
//  .sparkVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.beta">beta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.genomics">genomics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.gpu">gpu</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.graviton">graviton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.latest">latest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.longTermSupport">longTermSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.ml">ml</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.photon">photon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.scala">scala</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.beta"></a>

```java
public java.lang.Object getBeta();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}.

---

##### `genomics`<sup>Optional</sup> <a name="genomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.genomics"></a>

```java
public java.lang.Object getGenomics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.gpu"></a>

```java
public java.lang.Object getGpu();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}.

---

##### `graviton`<sup>Optional</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.graviton"></a>

```java
public java.lang.Object getGraviton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latest`<sup>Optional</sup> <a name="latest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.latest"></a>

```java
public java.lang.Object getLatest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}.

---

##### `longTermSupport`<sup>Optional</sup> <a name="longTermSupport" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.longTermSupport"></a>

```java
public java.lang.Object getLongTermSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}.

---

##### `ml`<sup>Optional</sup> <a name="ml" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.ml"></a>

```java
public java.lang.Object getMl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}.

---

##### `photon`<sup>Optional</sup> <a name="photon" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.photon"></a>

```java
public java.lang.Object getPhoton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}.

---

##### `scala`<sup>Optional</sup> <a name="scala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.scala"></a>

```java
public java.lang.String getScala();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}.

---

##### `sparkVersion`<sup>Optional</sup> <a name="sparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.sparkVersion"></a>

```java
public java.lang.String getSparkVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}.

---



