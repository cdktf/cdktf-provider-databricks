# `dataDatabricksServicePrincipalFederationPolicies` Submodule <a name="`dataDatabricksServicePrincipalFederationPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipalFederationPolicies <a name="DataDatabricksServicePrincipalFederationPolicies" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies databricks_service_principal_federation_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPolicies;

DataDatabricksServicePrincipalFederationPolicies.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .servicePrincipalId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.servicePrincipalId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPolicies;

DataDatabricksServicePrincipalFederationPolicies.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPolicies;

DataDatabricksServicePrincipalFederationPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPolicies;

DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPolicies;

DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksServicePrincipalFederationPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksServicePrincipalFederationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipalFederationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList">DataDatabricksServicePrincipalFederationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.policies"></a>

```java
public DataDatabricksServicePrincipalFederationPoliciesPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList">DataDatabricksServicePrincipalFederationPoliciesPoliciesList</a>

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalIdInput"></a>

```java
public java.lang.Number getServicePrincipalIdInput();
```

- *Type:* java.lang.Number

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalFederationPoliciesConfig <a name="DataDatabricksServicePrincipalFederationPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPoliciesConfig;

DataDatabricksServicePrincipalFederationPoliciesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .servicePrincipalId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

### DataDatabricksServicePrincipalFederationPoliciesPolicies <a name="DataDatabricksServicePrincipalFederationPoliciesPolicies" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPoliciesPolicies;

DataDatabricksServicePrincipalFederationPoliciesPolicies.builder()
//  .description(java.lang.String)
//  .oidcPolicy(DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy)
//  .policyId(java.lang.String)
//  .servicePrincipalId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#description DataDatabricksServicePrincipalFederationPolicies#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#oidc_policy DataDatabricksServicePrincipalFederationPolicies#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#policy_id DataDatabricksServicePrincipalFederationPolicies#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#description DataDatabricksServicePrincipalFederationPolicies#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.oidcPolicy"></a>

```java
public DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#oidc_policy DataDatabricksServicePrincipalFederationPolicies#oidc_policy}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#policy_id DataDatabricksServicePrincipalFederationPolicies#policy_id}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

### DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy;

DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.builder()
//  .audiences(java.util.List<java.lang.String>)
//  .issuer(java.lang.String)
//  .jwksJson(java.lang.String)
//  .jwksUri(java.lang.String)
//  .subject(java.lang.String)
//  .subjectClaim(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#audiences DataDatabricksServicePrincipalFederationPolicies#audiences}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#issuer DataDatabricksServicePrincipalFederationPolicies#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#jwks_json DataDatabricksServicePrincipalFederationPolicies#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#jwks_uri DataDatabricksServicePrincipalFederationPolicies#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subject">subject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#subject DataDatabricksServicePrincipalFederationPolicies#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#subject_claim DataDatabricksServicePrincipalFederationPolicies#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#audiences DataDatabricksServicePrincipalFederationPolicies#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#issuer DataDatabricksServicePrincipalFederationPolicies#issuer}.

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#jwks_json DataDatabricksServicePrincipalFederationPolicies#jwks_json}.

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#jwks_uri DataDatabricksServicePrincipalFederationPolicies#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#subject DataDatabricksServicePrincipalFederationPolicies#subject}.

---

##### `subjectClaim`<sup>Optional</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policies#subject_claim DataDatabricksServicePrincipalFederationPolicies#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalFederationPoliciesPoliciesList <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesList" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList;

new DataDatabricksServicePrincipalFederationPoliciesPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get"></a>

```java
public DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksServicePrincipalFederationPoliciesPolicies> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>>

---


### DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference;

new DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim">resetSubjectClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson"></a>

```java
public void resetJwksJson()
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri"></a>

```java
public void resetJwksUri()
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject"></a>

```java
public void resetSubject()
```

##### `resetSubjectClaim` <a name="resetSubjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim"></a>

```java
public void resetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput"></a>

```java
public java.lang.String getJwksJsonInput();
```

- *Type:* java.lang.String

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput"></a>

```java
public java.lang.String getJwksUriInput();
```

- *Type:* java.lang.String

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput"></a>

```java
public java.lang.String getSubjectClaimInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>

---


### DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal_federation_policies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference;

new DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy">putOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetOidcPolicy">resetOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOidcPolicy` <a name="putOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy"></a>

```java
public void putOidcPolicy(DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOidcPolicy` <a name="resetOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetOidcPolicy"></a>

```java
public void resetOidcPolicy()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetServicePrincipalId"></a>

```java
public void resetServicePrincipalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput">oidcPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicy"></a>

```java
public DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `oidcPolicyInput`<sup>Optional</sup> <a name="oidcPolicyInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput"></a>

```java
public IResolvable|DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy getOidcPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalIdInput"></a>

```java
public java.lang.Number getServicePrincipalIdInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.internalValue"></a>

```java
public DataDatabricksServicePrincipalFederationPoliciesPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>

---



