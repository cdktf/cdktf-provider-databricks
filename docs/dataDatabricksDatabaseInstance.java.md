# `dataDatabricksDatabaseInstance` Submodule <a name="`dataDatabricksDatabaseInstance` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseInstance <a name="DataDatabricksDatabaseInstance" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance databricks_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstance;

DataDatabricksDatabaseInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstance;

DataDatabricksDatabaseInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstance;

DataDatabricksDatabaseInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstance;

DataDatabricksDatabaseInstance.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstance;

DataDatabricksDatabaseInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksDatabaseInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksDatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksDatabaseInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacity">capacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.childInstanceRefs">childInstanceRefs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList">DataDatabricksDatabaseInstanceChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.customTags">customTags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList">DataDatabricksDatabaseInstanceCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCapacity">effectiveCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCustomTags">effectiveCustomTags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList">DataDatabricksDatabaseInstanceEffectiveCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnablePgNativeLogin">effectiveEnablePgNativeLogin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnableReadableSecondaries">effectiveEnableReadableSecondaries</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveNodeCount">effectiveNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveRetentionWindowInDays">effectiveRetentionWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveStopped">effectiveStopped</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveUsagePolicyId">effectiveUsagePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRef">parentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference">DataDatabricksDatabaseInstanceParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.pgVersion">pgVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readOnlyDns">readOnlyDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readWriteDns">readWriteDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDays">retentionWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stopped">stopped</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.usagePolicyId">usagePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacity"></a>

```java
public java.lang.String getCapacity();
```

- *Type:* java.lang.String

---

##### `childInstanceRefs`<sup>Required</sup> <a name="childInstanceRefs" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.childInstanceRefs"></a>

```java
public DataDatabricksDatabaseInstanceChildInstanceRefsList getChildInstanceRefs();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList">DataDatabricksDatabaseInstanceChildInstanceRefsList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.customTags"></a>

```java
public DataDatabricksDatabaseInstanceCustomTagsList getCustomTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList">DataDatabricksDatabaseInstanceCustomTagsList</a>

---

##### `effectiveCapacity`<sup>Required</sup> <a name="effectiveCapacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCapacity"></a>

```java
public java.lang.String getEffectiveCapacity();
```

- *Type:* java.lang.String

---

##### `effectiveCustomTags`<sup>Required</sup> <a name="effectiveCustomTags" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCustomTags"></a>

```java
public DataDatabricksDatabaseInstanceEffectiveCustomTagsList getEffectiveCustomTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList">DataDatabricksDatabaseInstanceEffectiveCustomTagsList</a>

---

##### `effectiveEnablePgNativeLogin`<sup>Required</sup> <a name="effectiveEnablePgNativeLogin" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnablePgNativeLogin"></a>

```java
public IResolvable getEffectiveEnablePgNativeLogin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `effectiveEnableReadableSecondaries`<sup>Required</sup> <a name="effectiveEnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnableReadableSecondaries"></a>

```java
public IResolvable getEffectiveEnableReadableSecondaries();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `effectiveNodeCount`<sup>Required</sup> <a name="effectiveNodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveNodeCount"></a>

```java
public java.lang.Number getEffectiveNodeCount();
```

- *Type:* java.lang.Number

---

##### `effectiveRetentionWindowInDays`<sup>Required</sup> <a name="effectiveRetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveRetentionWindowInDays"></a>

```java
public java.lang.Number getEffectiveRetentionWindowInDays();
```

- *Type:* java.lang.Number

---

##### `effectiveStopped`<sup>Required</sup> <a name="effectiveStopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveStopped"></a>

```java
public IResolvable getEffectiveStopped();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `effectiveUsagePolicyId`<sup>Required</sup> <a name="effectiveUsagePolicyId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveUsagePolicyId"></a>

```java
public java.lang.String getEffectiveUsagePolicyId();
```

- *Type:* java.lang.String

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enablePgNativeLogin"></a>

```java
public IResolvable getEnablePgNativeLogin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondaries"></a>

```java
public IResolvable getEnableReadableSecondaries();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `parentInstanceRef`<sup>Required</sup> <a name="parentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRef"></a>

```java
public DataDatabricksDatabaseInstanceParentInstanceRefOutputReference getParentInstanceRef();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference">DataDatabricksDatabaseInstanceParentInstanceRefOutputReference</a>

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.pgVersion"></a>

```java
public java.lang.String getPgVersion();
```

- *Type:* java.lang.String

---

##### `readOnlyDns`<sup>Required</sup> <a name="readOnlyDns" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readOnlyDns"></a>

```java
public java.lang.String getReadOnlyDns();
```

- *Type:* java.lang.String

---

##### `readWriteDns`<sup>Required</sup> <a name="readWriteDns" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readWriteDns"></a>

```java
public java.lang.String getReadWriteDns();
```

- *Type:* java.lang.String

---

##### `retentionWindowInDays`<sup>Required</sup> <a name="retentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDays"></a>

```java
public java.lang.Number getRetentionWindowInDays();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stopped`<sup>Required</sup> <a name="stopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stopped"></a>

```java
public IResolvable getStopped();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.usagePolicyId"></a>

```java
public java.lang.String getUsagePolicyId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseInstanceChildInstanceRefs <a name="DataDatabricksDatabaseInstanceChildInstanceRefs" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceChildInstanceRefs;

DataDatabricksDatabaseInstanceChildInstanceRefs.builder()
//  .branchTime(java.lang.String)
//  .lsn(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.branchTime">branchTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.lsn">lsn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `branchTime`<sup>Optional</sup> <a name="branchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.branchTime"></a>

```java
public java.lang.String getBranchTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.lsn"></a>

```java
public java.lang.String getLsn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

### DataDatabricksDatabaseInstanceConfig <a name="DataDatabricksDatabaseInstanceConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceConfig;

DataDatabricksDatabaseInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

### DataDatabricksDatabaseInstanceCustomTags <a name="DataDatabricksDatabaseInstanceCustomTags" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceCustomTags;

DataDatabricksDatabaseInstanceCustomTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}.

---

### DataDatabricksDatabaseInstanceEffectiveCustomTags <a name="DataDatabricksDatabaseInstanceEffectiveCustomTags" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceEffectiveCustomTags;

DataDatabricksDatabaseInstanceEffectiveCustomTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}.

---

### DataDatabricksDatabaseInstanceParentInstanceRef <a name="DataDatabricksDatabaseInstanceParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceParentInstanceRef;

DataDatabricksDatabaseInstanceParentInstanceRef.builder()
//  .branchTime(java.lang.String)
//  .lsn(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.branchTime">branchTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.lsn">lsn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `branchTime`<sup>Optional</sup> <a name="branchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.branchTime"></a>

```java
public java.lang.String getBranchTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.lsn"></a>

```java
public java.lang.String getLsn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseInstanceChildInstanceRefsList <a name="DataDatabricksDatabaseInstanceChildInstanceRefsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceChildInstanceRefsList;

new DataDatabricksDatabaseInstanceChildInstanceRefsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get"></a>

```java
public DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksDatabaseInstanceChildInstanceRefs> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>>

---


### DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference <a name="DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference;

new DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime">resetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetLsn">resetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchTime` <a name="resetBranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime"></a>

```java
public void resetBranchTime()
```

##### `resetLsn` <a name="resetLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetLsn"></a>

```java
public void resetLsn()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn">effectiveLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput">branchTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput">lsnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTime">branchTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsn">lsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveLsn`<sup>Required</sup> <a name="effectiveLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```java
public java.lang.String getEffectiveLsn();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `branchTimeInput`<sup>Optional</sup> <a name="branchTimeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```java
public java.lang.String getBranchTimeInput();
```

- *Type:* java.lang.String

---

##### `lsnInput`<sup>Optional</sup> <a name="lsnInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput"></a>

```java
public java.lang.String getLsnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `branchTime`<sup>Required</sup> <a name="branchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTime"></a>

```java
public java.lang.String getBranchTime();
```

- *Type:* java.lang.String

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsn"></a>

```java
public java.lang.String getLsn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.internalValue"></a>

```java
public DataDatabricksDatabaseInstanceChildInstanceRefs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>

---


### DataDatabricksDatabaseInstanceCustomTagsList <a name="DataDatabricksDatabaseInstanceCustomTagsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceCustomTagsList;

new DataDatabricksDatabaseInstanceCustomTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.get"></a>

```java
public DataDatabricksDatabaseInstanceCustomTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksDatabaseInstanceCustomTags> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a>>

---


### DataDatabricksDatabaseInstanceCustomTagsOutputReference <a name="DataDatabricksDatabaseInstanceCustomTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceCustomTagsOutputReference;

new DataDatabricksDatabaseInstanceCustomTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.internalValue"></a>

```java
public DataDatabricksDatabaseInstanceCustomTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a>

---


### DataDatabricksDatabaseInstanceEffectiveCustomTagsList <a name="DataDatabricksDatabaseInstanceEffectiveCustomTagsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList;

new DataDatabricksDatabaseInstanceEffectiveCustomTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.get"></a>

```java
public DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksDatabaseInstanceEffectiveCustomTags> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a>>

---


### DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference <a name="DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference;

new DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.internalValue"></a>

```java
public DataDatabricksDatabaseInstanceEffectiveCustomTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a>

---


### DataDatabricksDatabaseInstanceParentInstanceRefOutputReference <a name="DataDatabricksDatabaseInstanceParentInstanceRefOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_database_instance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference;

new DataDatabricksDatabaseInstanceParentInstanceRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetBranchTime">resetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetLsn">resetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchTime` <a name="resetBranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetBranchTime"></a>

```java
public void resetBranchTime()
```

##### `resetLsn` <a name="resetLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetLsn"></a>

```java
public void resetLsn()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn">effectiveLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput">branchTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsnInput">lsnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTime">branchTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsn">lsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef">DataDatabricksDatabaseInstanceParentInstanceRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveLsn`<sup>Required</sup> <a name="effectiveLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn"></a>

```java
public java.lang.String getEffectiveLsn();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `branchTimeInput`<sup>Optional</sup> <a name="branchTimeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput"></a>

```java
public java.lang.String getBranchTimeInput();
```

- *Type:* java.lang.String

---

##### `lsnInput`<sup>Optional</sup> <a name="lsnInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsnInput"></a>

```java
public java.lang.String getLsnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `branchTime`<sup>Required</sup> <a name="branchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTime"></a>

```java
public java.lang.String getBranchTime();
```

- *Type:* java.lang.String

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsn"></a>

```java
public java.lang.String getLsn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.internalValue"></a>

```java
public DataDatabricksDatabaseInstanceParentInstanceRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef">DataDatabricksDatabaseInstanceParentInstanceRef</a>

---



