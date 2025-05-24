# `dataDatabricksInstanceProfiles` Submodule <a name="`dataDatabricksInstanceProfiles` Submodule" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksInstanceProfiles <a name="DataDatabricksInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles databricks_instance_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_instance_profiles.DataDatabricksInstanceProfiles;

DataDatabricksInstanceProfiles.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .instanceProfiles(IResolvable)
//  .instanceProfiles(java.util.List<DataDatabricksInstanceProfilesInstanceProfiles>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#id DataDatabricksInstanceProfiles#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.instanceProfiles">instanceProfiles</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>></code> | instance_profiles block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#id DataDatabricksInstanceProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfiles`<sup>Optional</sup> <a name="instanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.instanceProfiles"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>>

instance_profiles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#instance_profiles DataDatabricksInstanceProfiles#instance_profiles}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putInstanceProfiles">putInstanceProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetInstanceProfiles">resetInstanceProfiles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInstanceProfiles` <a name="putInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putInstanceProfiles"></a>

```java
public void putInstanceProfiles(IResolvable OR java.util.List<DataDatabricksInstanceProfilesInstanceProfiles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putInstanceProfiles.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceProfiles` <a name="resetInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetInstanceProfiles"></a>

```java
public void resetInstanceProfiles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksInstanceProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_instance_profiles.DataDatabricksInstanceProfiles;

DataDatabricksInstanceProfiles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_instance_profiles.DataDatabricksInstanceProfiles;

DataDatabricksInstanceProfiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_instance_profiles.DataDatabricksInstanceProfiles;

DataDatabricksInstanceProfiles.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_instance_profiles.DataDatabricksInstanceProfiles;

DataDatabricksInstanceProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksInstanceProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksInstanceProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksInstanceProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksInstanceProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksInstanceProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfiles">instanceProfiles</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList">DataDatabricksInstanceProfilesInstanceProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfilesInput">instanceProfilesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `instanceProfiles`<sup>Required</sup> <a name="instanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfiles"></a>

```java
public DataDatabricksInstanceProfilesInstanceProfilesList getInstanceProfiles();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList">DataDatabricksInstanceProfilesInstanceProfilesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceProfilesInput`<sup>Optional</sup> <a name="instanceProfilesInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfilesInput"></a>

```java
public java.lang.Object getInstanceProfilesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksInstanceProfilesConfig <a name="DataDatabricksInstanceProfilesConfig" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_instance_profiles.DataDatabricksInstanceProfilesConfig;

DataDatabricksInstanceProfilesConfig.builder()
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
//  .id(java.lang.String)
//  .instanceProfiles(IResolvable)
//  .instanceProfiles(java.util.List<DataDatabricksInstanceProfilesInstanceProfiles>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#id DataDatabricksInstanceProfiles#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.instanceProfiles">instanceProfiles</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>></code> | instance_profiles block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#id DataDatabricksInstanceProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfiles`<sup>Optional</sup> <a name="instanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.instanceProfiles"></a>

```java
public java.lang.Object getInstanceProfiles();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>>

instance_profiles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#instance_profiles DataDatabricksInstanceProfiles#instance_profiles}

---

### DataDatabricksInstanceProfilesInstanceProfiles <a name="DataDatabricksInstanceProfilesInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_instance_profiles.DataDatabricksInstanceProfilesInstanceProfiles;

DataDatabricksInstanceProfilesInstanceProfiles.builder()
//  .arn(java.lang.String)
//  .isMeta(java.lang.Boolean)
//  .isMeta(IResolvable)
//  .name(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#arn DataDatabricksInstanceProfiles#arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.isMeta">isMeta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#is_meta DataDatabricksInstanceProfiles#is_meta}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#name DataDatabricksInstanceProfiles#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#role_arn DataDatabricksInstanceProfiles#role_arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#arn DataDatabricksInstanceProfiles#arn}.

---

##### `isMeta`<sup>Optional</sup> <a name="isMeta" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.isMeta"></a>

```java
public java.lang.Object getIsMeta();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#is_meta DataDatabricksInstanceProfiles#is_meta}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#name DataDatabricksInstanceProfiles#name}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/instance_profiles#role_arn DataDatabricksInstanceProfiles#role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksInstanceProfilesInstanceProfilesList <a name="DataDatabricksInstanceProfilesInstanceProfilesList" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_instance_profiles.DataDatabricksInstanceProfilesInstanceProfilesList;

new DataDatabricksInstanceProfilesInstanceProfilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.get"></a>

```java
public DataDatabricksInstanceProfilesInstanceProfilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>>

---


### DataDatabricksInstanceProfilesInstanceProfilesOutputReference <a name="DataDatabricksInstanceProfilesInstanceProfilesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_instance_profiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference;

new DataDatabricksInstanceProfilesInstanceProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetIsMeta">resetIsMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetIsMeta` <a name="resetIsMeta" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetIsMeta"></a>

```java
public void resetIsMeta()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMetaInput">isMetaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMeta">isMeta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `isMetaInput`<sup>Optional</sup> <a name="isMetaInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMetaInput"></a>

```java
public java.lang.Object getIsMetaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `isMeta`<sup>Required</sup> <a name="isMeta" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMeta"></a>

```java
public java.lang.Object getIsMeta();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>

---



